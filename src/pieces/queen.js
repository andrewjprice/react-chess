import { Piece } from './index';

export class Queen extends Piece {
    constructor(player) {
        const light = "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg";
        const dark = "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";
        super(player, (player === 1 ? light : dark));
        this.player = player;
    }

    isMovePossible(current, destination, squares) {
        return this.isMoveLegal(current, destination) && this.isPathPossible(current, destination, squares);
    }

    isMoveLegal(start, end) {
        let mod = start % 8;
        let diff = 8 - mod;
        return (Math.abs(start-end) % 8 === 0 ||
        Math.abs(start-end) % 7 === 0 ||
        Math.abs(start-end) % 9 === 0 ||
        end >= (start-mod) && end < (start+diff));
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
        else if (Math.abs(start - end) % 9 === 0 ) {
            increment = 9;
            pathStart += increment;
        }
        else if (Math.abs(start - end) % 8 === 0 ) {
            increment = 8;
            pathStart += increment;
        }
        else {
            increment = 1;
            pathStart += increment;
        }

        for (let i=pathStart; i<pathEnd; i+=increment) {
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