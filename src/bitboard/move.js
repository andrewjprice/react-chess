// https://www.chessprogramming.org/Encoding_Moves

export default class Move {
    constructor(from, to, piece, type, captPiece) {
        this.move = ((from & 0x3f) << 6) | (to & 0x3f) | ((piece % 0xf) << 12) | ((type & 0x7) << 16) | ((captPiece & 0x7) << 19)
    }

    from() {
        return (this.move >>> 6) & 0x3f;
    }

    to() {
        return this.move & 0x3f;
    }

    piece() {
        return (this.move >>> 12) & 0xf;
    }

    type() {
        return (this.move >>> 16) & 0x7;
    }

    isCapt() {
        return (this.move >>> 19) & 0x7;
    }
}