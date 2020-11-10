 import React, { Component } from 'react';
  import './App.css';
 
class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
                  First: '',
                  Last:  '',
                  email:  "email",
                  phone:  null,
                };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
   handleChange(event) {
      console.log(event.target.name);
     console.log(event.target.value);
      //const value = event.target.value;
    //  if(event.target.name === "1"){
     //this.setState({First:event.target.value});
      // }
      // if(event.target.name === "2"){
      //    this.setState({Last:event.target.value});
     //  }
      // if(event.target.name === "3"){
     // this.setState({email:event.target.value});
      // }
      // if(event.target.name === "4"){
      //    this.setState({phone:event.target.value});
      // }
    

    //this.setState({First:event.target.value,
                  // Last:event.target.value,
                   // email:event.target.value,
//phone:event.target.value});
   
  
  }
  handleSubmit(event) {
     this.setState({ [event.target.name]: event.target.value });
    alert('form submitted')
     
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
      
<div class="form-group">
      <label for="First">First Name:</label>
      <input type="text" name="First" className="form-control" id="First" value={this.state.First}
      onChange={this.handleChange} />
    </div>
    <div class="form-group">
      <label for="Last">Last Name:</label>
      <input type="text"  name="Last" class="form-control" id="Last" value={this.state.Last}
      onChange={this.handleChange} />
    </div>
     <div class="form-group">
      <label for="email">Email:</label>
      <input type="email"  name="email" class="form-control" id="email"value={this.state.email}
      onChange={this.handleChange} />
    </div>    
    <div class="form-group">
      <label for="phone">phone:</label>
      <input type="tel"  name="phone"  maxlength="10" class="form-control" id="phone"value={this.state.phone}
      onChange={this.handleChange} />
    </div> 
    <button type="submit" class="btn btn-danger btn-block btn-lg">submit</button>
    
      </form>
    );
  }
}
      



export default App;
