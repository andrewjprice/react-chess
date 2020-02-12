import { Piece } from './index';

export class King extends Piece {
    constructor(player) {
        const light = "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg";
        const dark = "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";
        super(player, (player === 1 ? light : dark));
    }

    isMovePossible(current, destination, squares) {
        return this.isMoveLegal(current, destination) && this.isPathPossible(current, destination, squares);
    }

    isMoveLegal(start, end) {
        let diff = Math.abs(start-end);
        return (diff === 8 || diff === 1);
    }

    isPathPossible(start, end, squares) {
        if (squares[end]) {
            return squares[end].player !== this.player;
        }
        return true;
    }
}