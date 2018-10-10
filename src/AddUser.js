import React, { Component } from 'react';

class AddUser extends Component {
  
  	state = {
    	firstName: '',
      	lastName: '',
      	username: '',
      	numberOfGames: 0
    }
	
	onChangeInput = event => {
      	const newState = {
        	[event.target.name]: event.target.value
        };
      
    	this.setState(newState);
    }

	addUser = event => {
      event.preventDefault();
      this.props.onAddUser(this.state);
    }

	isInputsEmpty = () => {
      	const { firstName, lastName, username } = this.state;
      
    	return firstName.trim() === '' || lastName.trim() === '' || username.trim() === '';
    } 

  	render() {
      return (
    	<form onSubmit={this.addUser}>
        	<input name="firstName" type="text" placeholder="First Name" value={this.state.firstName} onChange={this.onChangeInput} />
            <input name="lastName" type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.onChangeInput} />
            <input name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.onChangeInput} />
            <button className="smallButton" disabled={this.isInputsEmpty()}>Add</button>
        </form>
      )
    }
}

export default AddUser;