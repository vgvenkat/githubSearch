import React from 'react';
import BackButton from './Back';
import Axios from 'axios';

const Issues = (props) => {
  const issueData = () => {
    const selectedRepo = props.match.params.repoName;
    console.log(selectedRepo)
      // Axios.get(`https://api.github.com/repos/${selectRepo}/issues`)
      // .then((response)=>{
      //   this.setState({
      //     githubData:response.data
      //   });
      //   console.log(this.state.githubData)
      // }).catch((err)=>{
      //   console.log(err)
      // })
  }
  return (
    <main>
      <BackButton history={props.history}/>
      <h1> Issues </h1>
      </main>
      )
};

export default Issues;