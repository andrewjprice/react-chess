import { Piece } from './index';

export class Queen extends Piece {
    constructor(player) {
        const light = "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg";
        const dark = "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";
        super(player, (player === 1 ? light : dark));
        this.player = player;
    }

    isMovePossible(currentPosition, destination, squares) {
        return (Math.abs(currentPosition-destination) % 1 === 0 ||
                Math.abs(currentPosition-destination) % 8 === 0 ||
                Math.abs(currentPosition-destination) % 7 === 0 ||
                Math.abs(currentPosition-destination) % 9 === 0)
    }

    movePath(start, end) {
        var path = [];
        let pathStart, pathEnd, increment;
        if (start > end) {
            pathStart = end;
            pathEnd = start;
        } else {
            pathStart = start;
            pathEnd = end;
        }
        if (Math.abs(start - end) % 7 === 0 ) {
            increment = 7;
            pathStart += increment;
        }
        else if (Math.abs(start - end) % 9 === 0 ) {
            increment = 9;
            pathStart += increment;
        }
        else if (Math.abs(start - end) % 8 === 0 ) {
            increment = 8;
            pathStart += increment;
        }
        else {
            increment = 1;
            pathStart += increment;
        }

        for (let i=pathStart; i<pathEnd; i+= increment) {
            path.push(i);
        }
        return path;
    }
}