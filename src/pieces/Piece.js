// Base class
export class Piece {
    constructor(player, iconImage) {
        this.player = player;
        this.style = { backgroundImage: 'url(' + iconImage + ')' };
    }
}