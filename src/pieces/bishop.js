import { Piece } from './index';

export class Bishop extends Piece {
    constructor(player) {
        const light = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg";
        const dark = "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg";
        super(player, (player === 1 ? light : dark));
        this.player = player;
    }

    isMovePossible(current, destination, squares) {
        return this.isMoveLegal(current, destination) && this.isPathPossible(current, destination, squares);
    }

    isMoveLegal(start, end) {
        if (Math.abs(start - end) % 7 === 0 || Math.abs(start - end) % 9 === 0) {
            return true;
        } else {
            return false;
        }
    }

    isPathPossible(start, end, squares) {
        let pathStart, pathEnd, increment;
        if (start > end) {
            pathStart = end;
            pathEnd = start;
        } else {
            pathStart = start;
            pathEnd = end;
        }
        if (Math.abs(start - end) % 7 === 0 ) {
            increment = 7;
            pathStart += increment;
        }
        if (Math.abs(start - end) % 9 === 0 ) {
            increment = 9;
            pathStart += increment;
        }

        for (let i=pathStart; i<pathEnd; i+= increment) {
            if (squares[i]) {
                return false;
            }
        }
        if (squares[end]) {
            return squares[end].player !== this.player;
        }
        return true;
    }
}