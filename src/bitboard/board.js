import { rankBB, idxBB } from './utils/boards';
import { PIECES } from '../constants/index';

/* bitboard board definition */
export default class BoardState {
    constructor() {
        this.board = [
            rankBB(1).or(rankBB(6)), // pawns
            idxBB(0).or(idxBB(7)).or(idxBB(56)).or(idxBB(63)), // rooks
            idxBB(1).or(idxBB(6)).or(idxBB(57)).or(idxBB(62)), // knights
            idxBB(2).or(idxBB(5)).or(idxBB(58)).or(idxBB(61)), // bishops
            idxBB(3).or(idxBB(59)), // queens
            idxBB(4).or(idxBB(60)), // kings
            rankBB(0).or(rankBB(1)), // white pieces
            rankBB(6).or(rankBB(7)), // black pieces
        ];

        this.pieces = this.initPieces();
    }

    initPieces() {
        let pieces = [];

        for (let i=0; i<64; i++) {
            pieces[i] = this.getPiece(i);
        }

        return pieces;
    }

    getPiece(idx) {
        for (let piece=PIECES.pawn; piece<=PIECES.king; piece++) {
            if (this.board[piece].hasBB(idx)) {
                return piece;
            }
        }

        return null;
    }
}