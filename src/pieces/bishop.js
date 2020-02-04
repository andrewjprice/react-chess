import { Piece } from './index';

export class Bishop extends Piece {
    constructor(player) {
        const light = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg";
        const dark = "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg";
        super(player, (player === 1 ? light : dark));
        this.player = player;
    }

    isMovePossible(currentPosition, destination, squares) {
        if (Math.abs(currentPosition - destination) % 7 === 0 || Math.abs(currentPosition - destination) % 9 === 0) {
            return true;
        } else {
            return false;
        }

    }
}