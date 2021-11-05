# Donut-Marker
Set map marker shape as donut which is same lat, lot

[NPM](https://www.npmjs.com/package/donuuut) package published.

Need donut shaped position calculator? Use this!

## How to use

```
import {makeDonuuut} from 'donuuut'

makeDonuut({
              blockSize: 32,
              radius: 50,
              offset: 16,
              itemSize: latLotDic[key].length
          })
```

- blockSize
> Item block size (width == height)

- radius
> Donut radius, it must bigger than `blockSize`

- offset
> Item block render offset position (x == y)

- itemSize
> How many items exist.

### Result

```
[
  { x: 0, y: 0 },
  { x: 50, y: 0 },
  { x: 38.54735723750887, y: 31.84495642961178 },
  { x: 9.435949999845093, y: 49.101556468206006 },
  { x: -23.998119816736835, y: 43.86445309429428 },
  { x: -46.438513904016936, y: 18.532793269942495 },
  { x: -47.60515958474969, y: -15.288844982879347 },
  { x: -26.963609810461676, y: -42.1065760421003 },
  { x: 6.030123593683077, y: -49.63504416684755 },
  { x: 36.261422944543, y: -34.42541511785981 }
]
```

## Preview

<div align="center">
  <img width="759" alt="스크린샷 2021-11-03 오후 6 39 30" src="https://user-images.githubusercontent.com/16532326/140037818-716fd2c0-6bfd-46ae-83c1-c85f34e55733.png">
</div>


## Test

```
npm test
```