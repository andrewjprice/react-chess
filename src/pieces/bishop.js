import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        const light = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg";
        const dark = "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg";
        super(player, (player === 1 ? light : dark));
    }
}