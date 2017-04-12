import React,{Component} from 'react';
import BackButton from './Back';
import Axios from 'axios';

class Issues extends Component  {
   constructor(){
     super();
     this.issueData = this.issueData.bind(this);
   }
   componentDidMount(){
     this.issueData();
   }
   issueData(){
    let selectedRepo = this.props.match.params.repoName;
    selectedRepo = selectedRepo.replace('.','/');
    console.log(selectedRepo)
      Axios.get(`https://api.github.com/repos/${selectedRepo}/issues`)
      .then((response)=>{
        
        console.log(response)
      }).catch((err)=>{
        console.log(err)
      })
  }
  render(){
  return (
    <main>
      <BackButton history={this.props.history}/>
      <h1> Issues </h1>
      </main>
      )
  }
}

export default Issues;