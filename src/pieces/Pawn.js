import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        const light = "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg";
        const dark = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg";
        super(player, (player === 1 ? light : dark));
    }
}