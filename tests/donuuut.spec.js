// const donuuut = require('../index');
import {makeDonuuut} from '../index.js'

// TEST GROUP items
// 0 > item (bad)
// 0 item (empty)
// 1 item (single)
// 10 item (multiple)

// TEST GROUP offset
// offset > 0
// 0 offset
// offset < 0

// TEST GROUP radius
// radius <= 0
// 0 < radius <= block size
// radius > block size

// TEST block size
// block size <= 0
// block size > 0

test('Expect zero result with zero item', () => {
    expect(makeDonuuut(
        {
            blockSize: 32,
            radius: 50,
            offset: 16,
            itemSize: 0
        }).length).toBe(0);
});

test('Expect zero result with zero item', () => {
    expect(makeDonuuut(
        {
            blockSize: 32,
            radius: 50,
            offset: 16,
            itemSize: 0
        }).length).toBe(0);
});