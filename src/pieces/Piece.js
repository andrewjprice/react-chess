
export default class Piece {
    constructor(player, iconImage) {
        this.player = player;
        this.icon = {backgroundImage: 'url(' + iconImage + ')'};
    }
}