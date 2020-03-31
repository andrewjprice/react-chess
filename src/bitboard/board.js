import { rankBB, idxBB } from './boards';

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

        this.whitePieces = this.whitePawns.or(this.whiteRooks).or(this.whiteKnights).or(this.whiteBishops).or(this.whiteQueen).or(this.whiteKing);
        this.blackPieces = this.blackPawns.or(this.blackRooks).or(this.blackKnights).or(this.blackBishops).or(this.blackQueen).or(this.blackKing);
        this.allPieces = this.whitePieces.or(this.blackPieces);
    }
}