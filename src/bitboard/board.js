import { rankBB, idxBB } from './boards';

/* bitboard board definition */
export default class BBoard {
    constructor() {
        this.whitePawns = rankBB().shl(8);
        this.whiteRooks = idxBB(0).or(idxBB(7));
        this.whiteKnights = idxBB(1).or(idxBB(6));
        this.whiteBishops = idxBB(2).or(idxBB(5));
        this.whiteQueen = idxBB(3);
        this.whiteKing = idxBB(4);

        this.blackPawns = rankBB().shl(48);
        this.blackRooks = idxBB(56).or(idxBB(63));
        this.blackKnights = idxBB(57).or(idxBB(62));
        this.blackBishops = idxBB(58).or(idxBB(61));
        this.blackQueen = idxBB(59);
        this.blackKing = idxBB(60);

        this.whitePieces = this.whitePawns.lower | this.whiteRooks.lower | this.whiteKnights.lower |
                           this.whiteBishops.lower | this.whiteQueen.lower | this.whiteKing.lower;

        this.blackPieces = this.blackPawns.upper | this.blackRooks.upper | this.blackKnights.upper |
                            this.blackBishops.upper | this.blackQueen.upper | this.blackKing.upper;
    }
}