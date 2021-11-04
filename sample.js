const markerPostList = [
    {
        lat: 75,
        lot: 75
    }
]

const boxSize = 50

function PythagoreanTheorem(x, y) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
}

markerPostList.forEach(marker => {
    const leftTop = {
        lat: marker.lat - boxSize / 2,
        lot: marker.lot - boxSize / 2,
        theta: 0
    }
    
    const rightBottom = {
        lat: marker.lat + boxSize / 2,
        lot: marker.lot + boxSize / 2,
        theta: 0
    }

    const radius = PythagoreanTheorem(leftTop.lat, leftTop.lot);

    leftTop.theta = Math.cos(leftTop.lat / radius);
    rightBottom.theta = Math.cos(rightBottom.lat / radius);

    const degree = 180 / Math.PI * (leftTop.theta - rightBottom.theta);
    console.log(`degree: ${degree}`)
    console.log(leftTop, rightBottom)
})