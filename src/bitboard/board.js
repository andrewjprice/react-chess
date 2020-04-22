import { rankBB, idxBB } from './utils/boards';
import { PIECES } from '../constants/index';
import {
    pawnAttacks,
    knightAttacksArr,
    kingAttacksArr,
    diagonalAttacks,
    fileAttacks,
    rankAttacks } from '../bitboard/attackBoards';
import Move from './move';

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
        for (let piece=PIECES.PAWN; piece<=PIECES.KING; piece++) {
            if (this.board[piece].hasBB(idx)) {
                return piece;
            }
        }

        return null;
    }

    getColor(idx) {
        if (this.board[PIECES.WHITE].hasBB(idx)) {
            return [PIECES.WHITE, 0];
        } else if (this.board[PIECES.BLACK].hasBB(idx)) {
            return [PIECES.BLACK, 1];
        }
        return null;
    }

    move(piece, color, from, to) {
        let fromToBB = idxBB(from).or(idxBB(to));
        this.board[piece].xor(fromToBB);
        this.board[color].xor(fromToBB);
        this.pieces[from] = null;
        this.pieces[to] = piece;
    }

    /* psuedo-legal moves */
    getPieceMoves(src) {
        let moves = [];
        let piece = this.getPiece(src);
        let [color, i] = this.getColor(src);

        if (piece === PIECES.PAWN) {
            let idx = idxBB(src);
            let singlePush = idx.copy().shl(8).shr(i<<4);
            let doublePush = idx.copy().shl(16).shr(i<<4);
            let attack = pawnAttacks(src, color);
            moves.push(singlePush.or(doublePush).or(attack));
        }
        else if (piece === PIECES.KNIGHT) {
            let attack = knightAttacksArr()[src];
            moves.push(attack);
        }
        else if (piece === PIECES.KING) {
            let attack = kingAttacksArr()[src];
            moves.push(attack)
        }
        else if (piece === PIECES.BISHOP) {
            let attack = diagonalAttacks(src);
            moves.push(attack);
        }
        else if (piece === PIECES.ROOK) {
            let attack = fileAttacks(src).or(rankAttacks(src));
            moves.push(attack);
        }
        else if (piece === PIECES.QUEEN) {
            let attack = diagonalAttacks(src).or(fileAttacks(src)).or(rankAttacks(src));
            moves.push(attack);
        }

        return moves;
    }
}