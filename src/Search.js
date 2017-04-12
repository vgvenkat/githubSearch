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
      repoName:"",
      githubData:{}
    }
  this.setRepo = this.setRepo.bind(this);
  }
  setRepo(repoName){
    this.setState({repoName});
  }
  componentWillMount(){
    const repoName = this.props.match.params.repoName; 
     this.setRepo(repoName)
  
    Axios.get(`https://api.github.com/search/repositories?q=${repoName}`)
      .then((response)=>{
        this.setState({
          githubData:response.data
        });
        console.log(response)
      }).catch((err)=>{
        console.log(err)
      })

    
  }
  render(){
    
    return (
      <main>
        <BackButton  history={this.props.history}/>
        <Home />
        {
          Object.keys(this.state.githubData.items || {})
          .map((item)=> (
            <RepoInfo key={this.state.githubData.items[item].id} 
            stars={this.state.githubData.items[item].stargazers_count} 
            name={this.state.githubData.items[item].full_name}
            description={this.state.githubData.items[item].description}
            history={this.props.history}
            />))
          
          
      }
      </main>
    )
  }
}

export default Search;