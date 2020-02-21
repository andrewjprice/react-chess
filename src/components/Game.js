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
      capturedWhite: [],
      capturedBlack: []
    }
  }

  movePiece(i) {
    const squares = this.state.squares.slice();
    const capturedWhite = this.state.capturedWhite.slice();
    const capturedBlack = this.state.capturedBlack.slice();
    var player = this.state.player;

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

      if (current.isMovePossible(this.state.currentSelected, i, squares)) {
        if (squares[i]) {
          if (squares[i].player === 1) {
            capturedWhite.push(squares[i]);
          } else {
            capturedBlack.push(squares[i]);
          }
        }
        squares[i] = current;
        squares[this.state.currentSelected] = null;
        player = player === 1 ? 2 : 1;
      }
      this.setState({
        squares: squares,
        currentSelected: -1,
        capturedWhite: capturedWhite,
        capturedBlack: capturedBlack,
        player: player });
    }
  }

  render() {
    return (
      <div className="board-container">
        <div>
          <div>
            <button onClick={() => this.setState({flip: !this.state.flip})}>Flip</button>
          </div>
          <Board
            squares={this.state.squares}
            player={this.state.player}
            onClick={(i) => this.movePiece(i)}
            flip={this.state.flip}
            />
        </div>
        <Captured player1={this.state.capturedWhite} player2={this.state.capturedBlack} />
      </div>
    )
  }
};