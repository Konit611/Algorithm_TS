// moveX10.test.ts
import { type Coordinate, moveX10 } from '../answer/t.js';

describe('moveX10 함수 테스트', () => {
  
  test('x축으로 10만큼 이동해야 한다 (양수)', () => {
    const start: Coordinate = { x: 5, y: 20 };
    const result = moveX10(start);
    
    expect(result.x).toBe(15);
    expect(result.y).toBe(20);
  });

  test('음수 좌표에서도 정상적으로 동작해야 한다', () => {
    const start: Coordinate = { x: -10, y: 0 };
    const result = moveX10(start);
    
    expect(result.x).toBe(0);
  });

  test('원본 객체를 변경하지 않아야 한다 (불변성 확인)', () => {
    const start: Coordinate = { x: 10, y: 10 };
    const result = moveX10(start);
    
    expect(result).not.toBe(start);
    expect(start.x).toBe(10);
  });

});