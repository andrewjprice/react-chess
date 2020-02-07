import { Piece } from './index';

export class Pawn extends Piece {
    constructor(player) {
        const light = "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg";
        const dark = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg";
        super(player, (player === 1 ? light : dark));
        this.player = player;
        this.startingPosition = {
            1: [48, 49, 50, 51, 52, 53, 54, 55],
            2: [8, 9, 10, 11, 12, 13, 14, 15, 16]
        }
    }

    isMovePossible(current, destination, squares) {
        var destinationSquare = squares[destination];
        return this.isMoveLegal(current, destination, destinationSquare) && this.isPathPossible(current, destination, squares);
    }

    isMoveLegal(start, end, square) {
        var move = Math.abs(start-end);
        // Standard 1 move
        if (!square && move === 8) {
            return true;
        }
        // 2 moves from start
        else if (!square && (move === 16 && this.startingPosition[this.player].indexOf(start) !== -1)) {
            return true;
        }
        // Piece capture
        else if (square && (move === 7 || move === 9)) {
            return true;
        }
        return false;
    }

    isPathPossible(start, end, squares) {
        let increment;
        var move = start-end;
        if (this.player === 1) {
            if (start < end) {
                return false;
            }
            if (move === 16) {
                increment = -8;
            } else {
                increment = end-start;
            }

            for (let i=start+increment; i>end; i+=increment) {
                if (squares[i] !== null) {
                    return false;
                }
            }
        }
        
        if (squares[end]) {
            return squares[end].player !== this.player
        }
        return true;
    }
}