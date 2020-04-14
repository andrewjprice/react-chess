import React from 'react';
import Square from './square';
import Piece from './piece';
import '../styles/index.css';

export default class Board extends React.Component {
  renderSquare(index, shade) {
    let square = this.props.squares[index];

    return (
      <Square shade={shade} move={this.props.movePiece} pos={index} key={index}>
        <Piece pos={index}>{square}</Piece>
      </Square>
    )
  }

  render() {
    const board = [];
    for (let i=0; i<8; i++) {
      const row = [];
      for (let j=0; j<8; j++) {
        const shade = (i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j & 2 !== 0) ? 'light-shade' : 'dark-shade';
        let square = this.renderSquare((i*8)+j, shade);
        row.push(square);
      }
      board.push(<div key={i}>{row}</div>);
    }
    return (
      <div>{board}</div>
    )
  }
};