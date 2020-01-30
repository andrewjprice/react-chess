import React from 'react';
import Board from './board';
import Pawn from '../pieces/pawn';

export default class Game extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="board-container">
        <div>
          <Board square={[]}/>
        </div>
      </div>
    )
  }
};