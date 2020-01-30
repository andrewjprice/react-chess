import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        const light = "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg";
        const dark = "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";
        super(player, (player === 1 ? light : dark));
    }
}