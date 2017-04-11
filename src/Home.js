import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Axios from 'axios';
class Home extends Component {
  constructor(){
    super();
    this.state = {
        githubData:{}
        
    }
    this.fetchData = this.fetchData.bind(this);
  }
 
  fetchData(event){
    event.preventDefault();
    console.log(this.context)
   // this.context.router.transitionTo(`/repo/${this.repoName.value}`);
    // Axios.get(`https://api.github.com/search/repositories?q=${this.repoName.value}`)
    //   .then((response)=>{
    //     this.setState({
    //       githubData:response.data
    //     });
    //     console.log(this.state.githubData)
    //   }).catch((err)=>{
    //     console.log(err)
    //   })
    
  }
  render() {
    return (
      <div>
     <Header />
      <div className="container">
        <form onSubmit={this.fetchData}>
            <input type="text" placeholder="github repo name" ref={(input) => this.repoName = input}/>
            <button type="submit"> Go!</button>
          </form>
          
      </div>  
      </div>
    );
  }
}
Home.contextTypes = {
 router: PropTypes.object
}
export default Home;

