import React from 'react';

const RepoInfo = (props) => {
  const gotoIssues = () =>{
    let repoName = props.name;
    repoName = repoName.replace('/','.');
    props.history.push(`/repo/${repoName}/issues`)
  }
  return (<div className="repoInfo" onClick={gotoIssues}>
              <div className="repoLeft">
                <p>{props.name}</p>
                <p>Stars: {props.stars}</p>
              </div>
              <div className="repoRight">
                <p>{props.description}</p>
              </div>
            </div>)
}

export default RepoInfo;