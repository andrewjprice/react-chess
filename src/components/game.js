import React from 'react';
import Board from './board';
import initializeBoard from '../helpers/initializeBoard';
import Captured from './captured';
import '../styles/index.css';

export default class Game extends React.Component {
  constructor(props) {
    super();
    this.state = {
      squares: initializeBoard(props.player),
      currentSelected: -1,
      player: props.player,
    }
  }

  movePiece(i) {
    const squares = this.state.squares.slice();

    var current = squares[this.state.currentSelected];

    // no piece selected
    if (this.state.currentSelected === -1) {
      if (squares[i] && squares[i].player === this.state.player) {
        squares[i].style = {...squares[i].style, backgroundColor: 'gold'};
        this.setState({ currentSelected: i });
      }
    }
    // piece selected
    else if (this.state.currentSelected > -1) {
      current.style = {...current.style, backgroundColor: ''};
      squares[i] = current;
      squares[this.state.currentSelected] = null;
      this.setState({ squares: squares, currentSelected: -1 });
    }
  }

  render() {
    return (
      <div className="board-container">
        <div>
          <Board
            squares={this.state.squares}
            player={this.state.player}
            onClick={(i) => this.movePiece(i)}
            />
        </div>
      </div>
    )
  }
};