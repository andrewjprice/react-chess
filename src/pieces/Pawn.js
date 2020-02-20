import { Piece } from './index';

export class Pawn extends Piece {
    constructor(player) {
        const light = "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg";
        const dark = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg";
        super(player, (player === 1 ? light : dark));
        this.piece = 'pawn';
        this.player = player;
        this.start = true;
    }

    isMovePossible(current, destination, squares) {
        var destinationSquare = squares[destination];
        if (this.isMoveLegal(current, destination, destinationSquare) && this.isPathPossible(current, destination, squares)) {
            this.start = false;
            return true;
        }
        return false;
    }

    isMoveLegal(start, end, square) {
        var move = Math.abs(start-end);
        // Standard 1 move
        if (!square && move === 8) {
            return true;
        }
        // 2 moves from start
        else if (!square && (move === 16 && this.start)) {
            return true;
        }
        // Piece capture
        else if (square && (move === 7 || move === 9)) {
            return true;
        }
        return false;
    }

    isPathPossible(start, end, squares) {
        let increment = 8;
        var move = Math.abs(start-end);

        if (this.player === 1) {
            increment = increment * -1;
        }
        
        if (move === 16 && (squares[start+increment] || squares[end])) {
            return false;
        } else if (move === 8 && squares[end]) {
            return false;
        } else {
            if (squares[end]) {
                return squares[end].player !== this.player
            }
        }
        return true;
    }

    checkKing(current, squares) {
        let left = 7;
        let right = 9;
        // only two paths to check king
        if (this.player === 1) {
            left = left * -1;
            right = right * -1;
        }
        
        if (squares[current+left] && squares[current+left].piece === 'king' || squares[current+right] && squares[current+right].piece === 'king') {
            return true;
        } else {
            return false;
        }
    }

}