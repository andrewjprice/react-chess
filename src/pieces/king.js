import { Piece } from './index';

export class King extends Piece {
    constructor(player) {
        const light = "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg";
        const dark = "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";
        super(player, (player === 1 ? light : dark));
    }
}