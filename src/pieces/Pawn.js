import Piece from './Piece';
import lightIcon from '../icons/pawn_light.svg';
import darkIcon from '../icons/pawn_dark.svg';

export default class Pawn extends Piece {
    constructor(player) {
        super(player, (player === 1 ? lightIcon : darkIcon))
    }
}