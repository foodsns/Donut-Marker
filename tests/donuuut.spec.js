// const donuuut = require('../index');
import {makeDonuuut} from '../index.js'

// TEST GROUP items
// 0 >= item (empty)
// 1 item (single)
// 10 item (multiple)

// TEST GROUP offset
// 0 offset
// 0 != offset

// TEST GROUP radius
// radius <= 0
// 0 < radius <= block size
// radius > block size

// TEST block size
// block size <= 0
// block size > 0

const ITEM_SIZE_LIST = [
    {
        val: 0,
        remark: 'item len <= 0'
    },
    {
        val: 1,
        remark: 'item len == 1'
    },
    {
        val: 10,
        remark: 'item len > 1'
    }
]

const OFFSET_LIST = [
    {
        val: 0,
        remark: 'offset == 0'
    },
    {
        val: 16,
        remark: 'offset != 0'
    }
]

const BLOCK_SIZE_LIST = [
    {
        val: -1,
        remark: 'block size <= 0'
    },
    {
        val: 32,
        remark: 'block size > 0'
    }
]

const RADIUS_LIST = [
    {
        val: -1,
        remark: 'radius <= 0'
    },
    {
        val: 32,
        remark: '0 < radius <= block size'
    },
    {
        val: 50,
        remark: 'block size < radius'
    }
]

const TESTCASES_LIST = []

beforeAll(() => {
    for (let i = 0; i < ITEM_SIZE_LIST.length; i ++) {
        for (let t = 0; t < OFFSET_LIST.length; t ++) {
            for (let q = 0; q < BLOCK_SIZE_LIST.length; q ++) {
                for (let itq = 0; itq < RADIUS_LIST.length; itq ++) {
                    if (!(q === 0 && itq === 1)) {
                        TESTCASES_LIST.push({
                            blockSize: BLOCK_SIZE_LIST[q],
                            radius: RADIUS_LIST[itq],
                            offset: OFFSET_LIST[t],
                            itemSize: ITEM_SIZE_LIST[i]
                        })
                    }
                }
            }
        }
    }

//     TESTCASES_LIST.forEach(item => {
//         console.log(`test('${item.blockSize.remark} ${item.radius.remark} ${item.offset.remark} ${item.itemSize.remark}', () => {
// });`)
//     })
});

function dataCast(test) {
    return {
        blockSize: test.blockSize.val,
        radius: test.radius.val,
        offset: test.offset.val,
        itemSize: test.itemSize.val
    }
}

test('block size <= 0 radius <= 0 offset == 0 item len <= 0', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[0])).length).toBe(0);
});

test('block size <= 0 block size < radius offset == 0 item len <= 0', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[1])).length).toBe(0);
});
  
test('block size > 0 radius <= 0 offset == 0 item len <= 0', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[2])).length).toBe(0);
});

test('block size > 0 0 < radius <= block size offset == 0 item len <= 0', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[3])).length).toBe(0);
});

test('block size > 0 block size < radius offset == 0 item len <= 0', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[4])).length).toBe(0);
});

test('block size <= 0 radius <= 0 offset != 0 item len <= 0', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[5])).length).toBe(0);
});

test('block size <= 0 block size < radius offset != 0 item len <= 0', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[6])).length).toBe(0);
});

test('block size > 0 radius <= 0 offset != 0 item len <= 0', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[7])).length).toBe(0);
});

test('block size > 0 0 < radius <= block size offset != 0 item len <= 0', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[8])).length).toBe(0);
});

test('block size > 0 block size < radius offset != 0 item len <= 0', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[9])).length).toBe(0);
});

test('block size <= 0 radius <= 0 offset == 0 item len == 1', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[10])).length).toBe(0);
});

test('block size <= 0 block size < radius offset == 0 item len == 1', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[11])).length).toBe(0);
});

test('block size > 0 radius <= 0 offset == 0 item len == 1', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[12])).length).toBe(0);
});

test('block size > 0 0 < radius <= block size offset == 0 item len == 1', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[13])).length).toBe(0);
});

test('block size > 0 block size < radius offset == 0 item len == 1', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[14])).length).toBe(1);
});

test('block size <= 0 radius <= 0 offset != 0 item len == 1', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[15])).length).toBe(0);
});

test('block size <= 0 block size < radius offset != 0 item len == 1', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[16])).length).toBe(0);
});

test('block size > 0 radius <= 0 offset != 0 item len == 1', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[17])).length).toBe(0);
});

test('block size > 0 0 < radius <= block size offset != 0 item len == 1', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[18])).length).toBe(0);
});

test('block size > 0 block size < radius offset != 0 item len == 1', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[19])).length).toBe(1);
});

test('block size <= 0 radius <= 0 offset == 0 item len > 1', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[20])).length).toBe(0);
});

// test('block size <= 0 block size < radius offset == 0 item len > 1', () => {
//     expect(makeDonuuut(dataCast(TESTCASES_LIST[21])).length).toBe(0);
// });

// test('block size > 0 radius <= 0 offset == 0 item len > 1', () => {
//     expect(makeDonuuut(dataCast(TESTCASES_LIST[22])).length).toBe(0);
// });

test('block size > 0 0 < radius <= block size offset == 0 item len > 1', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[23])).length).toBe(0);
});

test('block size > 0 block size < radius offset == 0 item len > 1', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[24])).length).toBe(10);
});

test('block size <= 0 radius <= 0 offset != 0 item len > 1', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[25])).length).toBe(0);
});

// test('block size <= 0 block size < radius offset != 0 item len > 1', () => {
//     expect(makeDonuuut(dataCast(TESTCASES_LIST[26])).length).toBe(0);
// });

// test('block size > 0 radius <= 0 offset != 0 item len > 1', () => {
//     expect(makeDonuuut(dataCast(TESTCASES_LIST[27])).length).toBe(0);
// });

test('block size > 0 0 < radius <= block size offset != 0 item len > 1', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[28])).length).toBe(0);
});

test('block size > 0 block size < radius offset != 0 item len > 1', () => {
    expect(makeDonuuut(dataCast(TESTCASES_LIST[29])).length).toBe(10);
});