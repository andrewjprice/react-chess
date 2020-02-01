import React from 'react';
import Board from './board';
import initializeBoard from '../helpers/initializeBoard';
import '../styles/index.css';

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: initializeBoard(),
      currentSelected: -1
    }
  }

  movePiece(i) {
    const squares = this.state.squares.slice();
    if (this.state.currentSelected === -1) {
      squares[i].style = {...squares[i].style, backgroundColor: 'gold'};
      this.setState({ currentSelected: i });
    } else if (this.state.currentSelected > -1) {
      squares[this.state.currentSelected].style = {...squares[this.state.currentSelected].style, backgroundColor: ''};
      squares[i] = squares[this.state.currentSelected];
      squares[this.state.currentSelected] = null;
      this.setState({ squares: squares, currentSelected: -1});
    }
  }

  render() {
    return (
      <div className="board-container">
        <div>
          <Board
            squares={this.state.squares}
            onClick={(i) => this.movePiece(i)}
            />
        </div>
      </div>
    )
  }
};