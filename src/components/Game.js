import React from 'react';
import Board from './board';
import initializeBoard from '../helpers/initializeBoard';
import '../styles/index.css';

export default class Game extends React.Component {
  constructor(props) {
    super();
    this.state = {
      squares: initializeBoard(props.player),
      currentSelected: -1,
      player: props.player
    }
  }

  movePiece(i) {
    const squares = this.state.squares.slice();
    var current = squares[this.state.currentSelected];
    if (this.state.currentSelected === -1) {
      if (squares[i] && squares[i].player === this.state.player) {
        squares[i].style = {...squares[i].style, backgroundColor: 'gold'};
        this.setState({ currentSelected: i });
      }
    }
    else if (this.state.currentSelected > -1) {
      current.style = {...current.style, backgroundColor: ''};

      if (current.isMovePossible(this.state.currentSelected, i, squares)) {
        squares[i] = current;
        squares[this.state.currentSelected] = null;
      }
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