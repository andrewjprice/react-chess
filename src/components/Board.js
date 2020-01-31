import React from 'react';
import Square from './square';
import '../styles/index.css';

export default class Board extends React.Component {
  render() {
    const board = [];
    for (let i=0; i<8; i++) {
      const row = [];
      for (let j=0; j<8; j++) {
        const shade = (i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j & 2 !== 0) ? 'light-shade' : 'dark-shade';
        row.push(
          <Square
            style={this.props.squares[i*8+j] ? this.props.squares[i*8+j].style : null}
            shade={shade}
            onClick={() => console.log(1)}
          />
        )
      }
      board.push(<div>{row}</div>);
    }
    return (
      <div>{board}</div>
    )
  }
};