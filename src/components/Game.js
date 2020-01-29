import React from 'react';
import Board from './Board';

export default class Game extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="board-container">
          <Board />
        </div>
      </div>
    )
  }
};