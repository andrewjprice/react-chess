import { Piece } from './index';

export class Pawn extends Piece {
    constructor(player) {
        const light = "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg";
        const dark = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg";
        super(player, (player === 1 ? light : dark));
        this.player = player;
        this.startingPosition = {
            1: [48, 49, 50, 51, 52, 53, 54, 55],
            2: [8, 9, 10, 11, 12, 13, 14, 15, 16]
        }
    }

    isMovePossible(currentPosition, destination, squares) {
        var destinationSquare = squares[destination];
        // Standard 1 move
        if (currentPosition - destination === 8 && !destinationSquare) {
            return true;
        }
        // 2 moves from start
        else if (!destinationSquare && (currentPosition - destination === 16 && this.startingPosition[this.player].indexOf(currentPosition) !== -1)) {
            return true;
        }
        // Piece capture
        else if ((currentPosition - destination === 7 || currentPosition - destination === 9) && destinationSquare) {
            return true;
        }
        return false;
    }

    movePath(start, end) {
        if (end === start + 16) {
            return [start+8];
        }
        else if (end === start - 16) {
            return [start-8];
        }
        return [];
    }
}