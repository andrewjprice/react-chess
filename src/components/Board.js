import React from 'react';
import Square from './square';
import '../styles/index.css';

export default class Board extends React.Component {
  renderSquare(index, shade) {
    let current = index;

    if (this.props.flip) {
      current = this.props.squares.length - current - 1;
    }
    return (
      <Square
        style={this.props.squares[current] ? this.props.squares[current].style : null}
        shade={shade}
        onClick={() => this.props.onClick(current)}
      />
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
      board.push(<div>{row}</div>);
    }
    return (
      <div>{board}</div>
    )
  }
};