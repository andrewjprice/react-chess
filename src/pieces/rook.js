import { Piece } from './index';

export class Rook extends Piece {
    constructor(player) {
        const light = "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg";
        const dark = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg";
        super(player, (player === 1 ? light : dark));
        this.piece = 'rook';
    }
}