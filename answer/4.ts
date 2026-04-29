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
    ...coord,     // 기존 y값 등을 유지하기 위해 전개 연산자 사용
    x: coord.x + 10
  };
};