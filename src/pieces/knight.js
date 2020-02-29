import { Piece } from './index';

export class Knight extends Piece {
    constructor(player) {
        const light = "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg";
        const dark = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg";
        super(player, (player === 1 ? light : dark));
        this.piece = 'knight';
        this.player = player;
        this.validMoves = [6, 10, 15, 17];
    }

    isMovePossible(current, destination, squares) {
        var destinationSquare = squares[destination];
        return this.isMoveLegal(current, destination) && this.movePath(destinationSquare);
    }

    isMoveLegal(start, end) {
        if (this.validMoves.indexOf(Math.abs(start - end)) > -1) {
            return true
        } else {
            return false;
        }
    }

    movePath(destinationSquare) {
        if (destinationSquare) {
            return destinationSquare.player !== this.player;
        }
        return true;
    }

    attackPaths(current, squares) {
        var path = [];
        if (!squares[current-6] || squares[current-6].piece === 'king') {
            path.push(current-6)
        }

        if (!squares[current+6] || squares[current+6].piece === 'king') {
            path.push(current+6)
        }

        if (!squares[current-10] || squares[current-10].piece === 'king') {
            path.push(current-10)
        }

        if (!squares[current+10] || squares[current+10].piece === 'king') {
            path.push(current+10)
        }

        if (!squares[current-10] || squares[current-10].piece === 'king') {
            path.push(current-10)
        }

        if (!squares[current+10] || squares[current+10].piece === 'king') {
            path.push(current+10)
        }

        if (!squares[current-10] || squares[current-10].piece === 'king') {
            path.push(current-10)
        }

        if (!squares[current+10] || squares[current+10].piece === 'king') {
            path.push(current+10)
        }

        if (!squares[current-15] || squares[current-15].piece === 'king') {
            path.push(current-15)
        }

        if (!squares[current+15] || squares[current+15].piece === 'king') {
            path.push(current+15)
        }

        if (!squares[current-17] || squares[current-17].piece === 'king') {
            path.push(current-17)
        }

        if (!squares[current+17] || squares[current+17].piece === 'king') {
            path.push(current+17)
        }
        return path;
    }
}