import React from 'react';

const ToggleNumberOfGames = (props) => {
	return (
    	<button className="smallButton" disabled={props.disabled} onClick={props.onToggleNumber}>
			{props.showNumber ? 'Hide the Number of Games Played' : 'Show the Number of Games Played'}
		</button>
    )
}

export default ToggleNumberOfGames;