import React from 'react';
import Board from './board';
import initializeBoard from '../helpers/initializeBoard';
import Captured from './captured';
import '../styles/index.css';

import { BitBoard } from '../bitboard/bitboard';
import { rankBB } from '../bitboard/boards';

export default class Game extends React.Component {
  constructor(props) {
    super();
    this.state = {
      squares: initializeBoard(props.player),
      currentSelected: -1,
      player: props.player,
      capturedWhite: [],
      capturedBlack: [],
      whiteKing: 60,
      blackKing: 4,
      checkKing: false
    }
  }

  preMove(i) {
    const squares = this.state.squares.slice();
    const whiteKing = this.state.whiteKing;
    const blackKing = this.state.blackKing;
    if (this.state.checkKing) {
      if (this.state.player === 1) {
        if (this.state.currentSelected === -1 && i !== whiteKing) {
          console.log('Move King out of check');
        }
        if (this.state.currentSelected === whiteKing) {
          this.movePiece(i);
        }
      } else {
        if (this.state.currentSelected === -1 && i !== blackKing) {
          console.log('Move King out of check');
        }
        else if ((this.state.currentSelected === -1 && i === blackKing) || this.state.currentSelected === blackKing) {
          this.movePiece(i);
        } else {
          console.log('else')
        }
      }
    } else {
      this.movePiece(i);
    }
  }

  movePiece(i) {
    const squares = this.state.squares.slice();
    const capturedWhite = this.state.capturedWhite.slice();
    const capturedBlack = this.state.capturedBlack.slice();
    var blackKing = this.state.blackKing;
    var whiteKing = this.state.whiteKing;
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

        if (squares[i].piece !== 'king') {
          var check = this.attackKing(squares[i].attackPaths(i, squares));
        } else {
          if (blackKing === this.state.currentSelected) {
            blackKing = i;
          } else {
            whiteKing = i;
          }
        }
        if (check) {
          if (player === 1) {
            squares[blackKing].style = {...squares[blackKing].style, backgroundColor: 'red'};
          } else {
            squares[whiteKing].style = {...squares[whiteKing].style, backgroundColor: 'red'};
          }
        }
        player = player === 1 ? 2 : 1;
      }
      this.setState({
        squares: squares,
        currentSelected: -1,
        capturedWhite: capturedWhite,
        capturedBlack: capturedBlack,
        whiteKing: whiteKing,
        blackKing: blackKing,
        player: player,
        checkKing: check });
    }
  }

  attackKing(paths) {
    if (this.state.player === 1) {
      return paths.indexOf(this.state.blackKing) > -1;
    } else {
      return paths.indexOf(this.state.whiteKing) > -1;
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
            onClick={(i) => this.preMove(i)}
            flip={this.state.flip}
            />
        </div>
        <Captured player1={this.state.capturedWhite} player2={this.state.capturedBlack} />
      </div>
    )
  }
};