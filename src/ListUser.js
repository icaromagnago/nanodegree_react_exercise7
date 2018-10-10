import React from 'react';

const ListUser = (props) => {
  return (
	<div>
      	<h2>Users</h2>
    	<ol>
			{props.users.map(user => (
             	<li key={user.username}>{`${user.username} played ${props.showNumber ? user.numberOfGames : '*'} games.`}</li>
             ))}
		</ol>  
    </div>
  )
}

export default ListUser;