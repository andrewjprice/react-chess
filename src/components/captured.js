import React from 'react';
import Square from './square';
import '../styles/index.css';

export default class Captured extends React.Component {
    renderSquare(pieces) {
        var row = [];
        pieces.map((square) => {
            row.push(<Square style={square.style} />);
        });
        return row;
    }
    render() {
        return(
            <div className="captured-block">
                <div>{this.renderSquare(this.props.player2)}</div>
                <div>{this.renderSquare(this.props.player1)}</div>
            </div>
        );
    }
}