import React from 'react';
import Board from './board';
import initializeBoard from '../helpers/initializeBoard';

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: initializeBoard()
    }
  }

  render() {
    return (
      <div className="board-container">
        <div>
          <Board squares={this.state.squares}/>
        </div>
      </div>
    )
  }
};