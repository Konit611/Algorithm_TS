export type Coordinate = {
  x: number;
  y: number;
};
/*
上記は2次元平面における座標を表現したモデルです。
与えられた座標をx軸方向に10平行移動させる関数と、そのテストケースを記載してください。
*/

export const moveX10 = (coord: Coordinate): Coordinate => {
  return {
    ...coord,
    x: coord.x + 10
  };
};