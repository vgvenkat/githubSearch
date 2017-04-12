import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class Home extends Component {
  constructor(){
    super();
    this.state = {
        repoName:""
        
    }
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData(event){
    event.preventDefault();
    const history = this.props.history;
    
    
     const repoName = this.repoName.value;
     this.setState({repoName})
    history.push(`/repo/${repoName}`);
   
    
    
  }
  render() {
    return (
      <div>
     <Header />
      <div className="container">
        <form onSubmit={this.fetchData}>
            <input type="text" placeholder="github repo name" defaultValue={this.state.repoName} ref={(input) => this.repoName = input} required/>
            <button type="submit"> Go!</button>
          </form>
          
      </div>  
      </div>
    );
  }
}

export default Home;

