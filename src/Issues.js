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
       repoName:"",
       issueData:{}
     }
   }
   componentWillMount(){
     this.issueData();
   }
   issueData(){
    let selectedRepo = this.props.match.params.repoName;
    const author = selectedRepo.split('.')[0];
    const repoName = selectedRepo.split('.')[1];
    selectedRepo = selectedRepo.replace('.','/');
    
    this.setState({author, repoName});
      Axios.get(`https://api.github.com/repos/${selectedRepo}/issues`)
      .then((response)=>{
        this.setState({issueData:response.data})
        console.log(response)
      }).catch((err)=>{
        console.log(err)
      })
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
        Object.keys(this.state.issueData || {})
        .map((issue)=> (
          <IssueItem key={this.state.issueData[issue].id}
          title = {this.state.issueData[issue].title}
          url={this.state.issueData[issue].url}
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