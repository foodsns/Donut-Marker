function PythagoreanTheorem(x, y) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
}

function Degree2Radius(degree) {
    return Math.PI / 180 * degree
}

function Radius2Degree(radius) {
    return 180 / Math.PI * radius
}

export function makeDonuuut ({
    blockSize,
    radius,
    offset,
    itemSize
} = {}) {
    const donuutArray = []
    let currentRadius = 0
    const halfBlockSize = blockSize / 2
    for (let i = 0; i < itemSize;) {
        const dummyBlock = {
            x: Math.cos(Degree2Radius(45)) * currentRadius,
            y: Math.sin(Degree2Radius(45)) * currentRadius
        }
        const leftTopDummyBlock = {
            x: dummyBlock.x - halfBlockSize,
            y: dummyBlock.y + halfBlockSize,
            theta: 0
        }
        const rightBottomDummyBlock = {
            x: dummyBlock.x + halfBlockSize,
            y: dummyBlock.y - halfBlockSize,
            theta: 0
        }
        const leftTopRadius = PythagoreanTheorem(leftTopDummyBlock.x, leftTopDummyBlock.y)
        const rightBottomRadius = PythagoreanTheorem(rightBottomDummyBlock.x, rightBottomDummyBlock.y)

        leftTopDummyBlock.theta = Math.cos(leftTopDummyBlock.x / leftTopRadius);
        rightBottomDummyBlock.theta = Math.cos(rightBottomDummyBlock.x / rightBottomRadius);

        const degree = Radius2Degree(leftTopDummyBlock.theta - rightBottomDummyBlock.theta) * 2;
        const maxMarkerCnt = Math.round(360 / (degree === 0 ? 360 : degree))

        let degreeCnt = 0

        for(let t = i; t < itemSize && t - i < maxMarkerCnt; t ++) {
            const theta = Degree2Radius(degreeCnt)
            donuutArray.push({
                x: currentRadius * Math.cos(theta) + offset,
                y: currentRadius * Math.sin(theta) + offset
            })
            degreeCnt += degree
        }

        i += maxMarkerCnt
        currentRadius += radius
    }

    return donuutArray;
}