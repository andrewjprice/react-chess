import { Piece } from './index';

export class Rook extends Piece {
    constructor(player) {
        const light = "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg";
        const dark = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg";
        super(player, (player === 1 ? light : dark));
        this.piece = 'rook';
    }

    isMovePossible(current, destination, squares) {
        return this.isMoveLegal(current, destination) && this.isPathPossible(current, destination, squares);
    }

    isMoveLegal(start, end) {
        let mod = start % 8;
        let diff = 8 - mod;
        return (Math.abs(start-end) % 8 === 0 || (end >= (start-mod) && end < (start+diff)));
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

        if (Math.abs(start-end) % 8 === 0) {
            increment = 8;
            pathStart += increment;
        } else {
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

    attackPaths(current, squares) {
        var path = [];
        let mod = current % 8;
        let leftMax = current - mod;
        let rightMax = current + mod;

        if (this.player === 2) {
            let leftMax = current + mod;
            let rightMax = current - mod;
        }

        // up
        for (let i=current+8; i<=63; i+=8) {
            if (squares[i]) {
                if (squares[i].piece === 'king') {
                    path.push(i);
                } else {
                    break;
                }
            }
        }

        // down
        for (let i=current-8; i>=0; i+=-8) {
            if (squares[i]) {
                if (squares[i].piece === 'king') {
                    path.push(i);
                } else {
                    break;
                }
            }
        }

        // left
        for (let i=current-1; i>=leftMax; i--) {
            if (squares[i]) {
                if (squares[i].piece === 'king') {
                    path.push(i);
                } else {
                    break;
                }
            }
        }

        // right
        for (let i=current+1; i<=rightMax; i++) {
            if (squares[i]) {
                if (squares[i].piece === 'king') {
                    path.push(i);
                } else {
                    break;
                }
            }
        }
        return path;
    }
}