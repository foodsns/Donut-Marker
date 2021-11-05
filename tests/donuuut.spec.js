// const donuuut = require('../index');
import {makeDonuuut} from '../index.js'

test('Expect zero result with zero item', () => {
    expect(makeDonuuut(
        {
            blockSize: 32,
            radius: 50,
            offset: 16,
            itemSize: 0
        }).length).toBe(0);
});