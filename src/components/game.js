import React from 'react';
import Board from './board';
import initializeBoard from '../helpers/initializeBoard';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import '../styles/index.css';

import BoardState from '../bitboard/board';

export default class Game extends React.Component {
  constructor(props) {
    super();
    this.state = {
      squares: initializeBoard(props.player),
      currentSelected: -1,
      player: props.player,
      boardState: new BoardState()
    }
  }

  movePiece(from, to) {
    if (this.state.boardState.isMoveValid(from, to)) {
      this.state.boardState.move(from, to);
      const squares = this.state.squares.slice();
      squares[to] = squares[from];
      squares[from] = null;
      this.setState({ squares: squares });
    } else {
      console.log('invalid move');
    }
  }

  render() {
    return (
      <div className="board-container">
        <div>
          <DndProvider backend={HTML5Backend}>
            <Board
              squares={this.state.squares}
              player={this.state.player}
              movePiece={(from, to) => this.movePiece(from, to)}
            />
          </DndProvider>
        </div>
      </div>
    )
  }
};