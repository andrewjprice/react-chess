import { rankBB, idxBB } from './utils/boards';

/* bitboard board definition */
export default class BoardState {
    constructor() {
        this.whitePawns = rankBB(1);
        this.whiteRooks = idxBB(0).or(idxBB(7));
        this.whiteKnights = idxBB(1).or(idxBB(6));
        this.whiteBishops = idxBB(2).or(idxBB(5));
        this.whiteQueen = idxBB(3);
        this.whiteKing = idxBB(4);

        this.blackPawns = rankBB(6);
        this.blackRooks = idxBB(56).or(idxBB(63));
        this.blackKnights = idxBB(57).or(idxBB(62));
        this.blackBishops = idxBB(58).or(idxBB(61));
        this.blackQueen = idxBB(59);
        this.blackKing = idxBB(60);

        this.whitePieces = this.whitePawns.copy().or(
                           this.whiteRooks.copy()).or(
                           this.whiteKnights.copy()).or(
                           this.whiteBishops.copy()).or(
                           this.whiteQueen.copy()).or(
                           this.whiteKing.copy());

        this.blackPieces = this.blackPawns.copy().or(
                           this.blackRooks.copy()).or(
                           this.blackKnights.copy()).or(
                           this.blackBishops.copy()).or(
                           this.blackQueen.copy()).or(
                           this.blackKing.copy());

        this.allPieces = this.whitePieces.or(this.blackPieces);
    }
}