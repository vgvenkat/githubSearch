import React,{Component} from 'react';
import Axios from 'axios';
import Home from './Home';
import BackButton from './Back';
import jsonData from './repoData.json'
import RepoInfo from './RepoInfo';

class Search extends Component {
  constructor(){
    super();
    this.state={
      repoName:""
    }
  this.setRepo = this.setRepo.bind(this);
  }
  setRepo(repoName){
    this.setState({repoName});
  }
  componentDidMount(){
    const repoName = this.props.match.params.repoName; 
     this.setRepo(repoName)
  
    // Axios.get(`https://api.github.com/search/repositories?q=${repoName}`)
    //   .then((response)=>{
    //     this.setState({
    //       githubData:response.data
    //     });
    //     console.log(this.state.githubData)
    //   }).catch((err)=>{
    //     console.log(err)
    //   })

    
  }
  render(){
    console.log( Object.keys(jsonData.items));
    return (
      <main>
        <BackButton history={this.props.history}/>
        <Home />
        <h1> Search:{this.state.repoName}</h1>
        {
          Object.keys(jsonData.items)
          .map((item)=> (
            <RepoInfo key={jsonData.items[item].id} 
            stars={jsonData.items[item].stargazers_count} 
            name={jsonData.items[item].full_name}
            description={jsonData.items[item].description}
            history={this.props.history}
            />))
          
          
      }
      </main>
    )
  }
}

export default Search;