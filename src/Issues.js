import React,{Component} from 'react';
import BackButton from './Back';
import Axios from 'axios';
import issueData from './issueData.json';
import IssueItem from './IssueItem';
class Issues extends Component  {
   constructor(){
     super();
     this.issueData = this.issueData.bind(this);
     this.state={
       author:"",
       repoName:""
     }
   }
   componentDidMount(){
     this.issueData();
   }
   issueData(){
    let selectedRepo = this.props.match.params.repoName;
    const author = selectedRepo.split('.')[0];
    const repoName = selectedRepo.split('.')[1];
    selectedRepo = selectedRepo.replace('.','/');
    
    this.setState({author, repoName});
      // Axios.get(`https://api.github.com/repos/${selectedRepo}/issues`)
      // .then((response)=>{
        
      //   console.log(response)
      // }).catch((err)=>{
      //   console.log(err)
      // })
  }
  render(){
  return (
    <main>
      <BackButton history={this.props.history}/>
      <h1> {this.state.repoName} </h1>
      <p>{this.state.author}</p>
      <div className="issueList">
      <ul>
      {
        Object.keys(issueData.data)
        .map((issue)=> (
          <IssueItem key={issueData.data[issue].id}
          title = {issueData.data[issue].title}
          url={issueData.data[issue].url}
          />
        ))
      }
      </ul>
      </div>
      </main>
      )
  }
}

export default Issues;