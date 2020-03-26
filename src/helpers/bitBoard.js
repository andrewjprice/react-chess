/*
    Represents a 64 bit unsigned int.
*/
export default class BitBoard {
    constructor(lower, upper) {
        this.lower = lower >>> 0;
        this.upper = upper >>> 0;
    }

    AND(other) {
        this.lower = (this.lower & other.lower) >>> 0;
        this.upper = (this.upper & other.upper) >>> 0;
        return this;
    }

    OR(other) {
        this.lower = (this.lower | other.lower) >>> 0;
        this.upper = (this.upper | other.upper) >>> 0;
    }

    NOT() {
        this.lower = (~this.lower) >>> 0;
        this.upper = (~this.upper) >>> 0;
    }
}