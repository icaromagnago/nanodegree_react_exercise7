import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser';
import ListUser from './ListUser';
import ToggleNumberOfGames from './ToggleNumberOfGames';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    error: '',
    showNumber: true,
  	users: []
  }

  onAddUser = (user) => {
    const users = this.state.users;
    if(users.includes(user)) {
    	this.setState({ error: `Username ${user.username} already exists.` });
    } else {
      this.setState((prevState) => ({
          users: [...prevState.users, user],
          error: ''
      }));
    }
  }

  onToggleNumber = () => {
  	this.setState((prevState) => ({
    	showNumber: !prevState.showNumber
    }))
  }

  isToggleButtonDisabled = () => {
  	return this.state.users.length === 0;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<AddUser onAddUser={this.onAddUser} />
		{this.state.error !== '' 
         ? <div className="error">{this.state.error}</div>
		 : ''}
		<ToggleNumberOfGames showNumber={this.state.showNumber} 
			disabled={this.isToggleButtonDisabled()} 
			onToggleNumber={this.onToggleNumber} />
		<ListUser users={this.state.users} showNumber={this.state.showNumber} />

      </div>
    );
  }
}

export default App;
