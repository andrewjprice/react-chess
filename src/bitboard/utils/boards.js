import BitBoard from '../bitboard';

export {
    makeBB,
    emptyBB,
    oneBB,
    idxBB,
    rankBB,
    rankMasks,
    fileBB,
    fileMasks,
    northRays,
    eastRays,
    nwRays,
    neRays,
    southRays,
    westRays,
    swRays,
    seRays
};

function makeBB(lower, upper) {
    return new BitBoard(lower, upper);
}

/* Zero bitboard */
function emptyBB() {
    return makeBB(0,0);
}

/* One bitboard */
function oneBB() {
    return makeBB(0xffffffff, 0xffffffff);
}

/* single bit bitboard */
function idxBB(i) {
    return makeBB(0,0).setBit(i);
}

/* rank masks */
function rankBB(i) {
    return makeBB(0xff, 0).shl(i * 8);
}

function rankMasks() {
    let ranks = []
    for (let i=0; i<8; i++) {
        ranks.push(rankBB(i))
    }
    return ranks;
}

/* file masks */
function fileBB(i) {
    return makeBB(0x01010101, 0x01010101).shl(i);
}

function fileMasks() {
    let files = []
    for (let i=0; i<8; i++) {
        files.push(fileBB(i))
    }
    return files;
}

/* ray attacks */
/* https://www.chessprogramming.org/On_an_empty_Board#Ray_Attacks */

/* positive rays */
function northRays() {
    var nort = makeBB(0x01010101, 0x01010101);
    let rays = [];

    for (let i=0; i<64; i++) {
        rays.push(nort.copy());
        nort.shl(1)
    }

    return rays;
}

function eastRays() {
    let mask = makeBB(0xff, 0);
    let rays = [];

    for (let r=0; r<8; r++) {
        let rankMask = mask.copy().shl(r*8);
        for (let f=0; f<8; f++) {
            rays.push(rankMask.copy().shl(f).and(rankMask));
        }
    }

    return rays;
}

function nwRays() {
    const notHFile = makeBB(0x7f7f7f7f, 0x7f7f7f7f);
    const midDiag = makeBB(0x10204080, 0x01020408);
    let rays = new Array(63);

    for (let r=0; r<=8*8; r+=8) {
        let nw = midDiag.copy().shl(r);
        for (let f=7; f>=0; f--) {
            if (f<7) {
                nw.shr(1).and(notHFile);
            }
            rays[r+f] = nw.copy();
        }
    }

    return rays;
}

function neRays() {
    const notAFile = makeBB(0xfefefefe, 0xfefefefe);
    const midDiag = makeBB(0x08040201, 0x80402010);
    let rays = [];

    for (var r=0; r<8; r++) {
        let ne = midDiag.copy().shl(r * 8);
        for (var f=0; f<8; f++) {
            if (f > 0) {
                ne.shl(1).and(notAFile);
            }
            rays.push(ne.copy());
        }
    }

    return rays;
}

/* negative rays */
function southRays() {
    const sout = makeBB(0x80808080, 0x80808080);
    let rays = new Array(63);

    for (let i=63; i>=0; i--) {
        rays[i] = sout.copy();
        sout.shr(1);
    }

    return rays;
}

function westRays() {
    let mask = makeBB(0xff, 0);
    let rays = [];

    for (let r=0; r<8; r++) {
        let westRank = mask.copy().shl(r*8);
        for (let f=7; f>=0; f--) {
            let west = westRank.copy().shr(f).and(westRank.copy());
            rays.push(west);
        }
    }

    return rays;
}

function swRays() {
    const midDiag = makeBB(0x08040201, 0x80402010);
    let rays = new Array(63);

    for (let i=63; i>=0; i--) {
        rays[63-i] = midDiag.copy().shr(i);
    }

    return rays;
}

function seRays() {
    const notAFile = makeBB(0xfefefefe, 0xfefefefe);
    const midDiag = makeBB(0x10204080, 0x01020408);
    let rays = [];

    for (let i=56; i>=0; i--) {
        rays.push(midDiag.copy().shr(i).and(notAFile));
    }

    let se = midDiag.copy();

    for (let i=0; i<7; i++) {
        se.shl(1)
        rays.push(se.copy().and(notAFile));
    }

    return rays;
}