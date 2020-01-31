import { Piece } from './index';

export class Knight extends Piece {
    constructor(player) {
        const light = "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg";
        const dark = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg";
        super(player, (player === 1 ? light : dark));
    }
}