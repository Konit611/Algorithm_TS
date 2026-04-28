// index.ts
type Coordinate = {
  x: number;
  y: number;
};

const moveX = (coord: Coordinate, distance: number): Coordinate => {
  return { ...coord, x: coord.x + distance };
};

const point: Coordinate = { x: 5, y: 10 };
console.log("결과:", moveX(point, 10));