import { calcTotalCost } from '../answer/exam.js'

type Project = {
  id: number;
  name: string;
  startAt: Date;
  endAt: Date;
  budget: number;
};

type Person = {
  id: number;
  email: string;
  unitCost: number; // per month
};

type Assignment = {
  id: number;
  projectId: number;
  personId: number;
  startAt: Date;
  endAt: Date;
  utilizationRate: number;  // 0~100
};

type Store = {
  projects: Project[];
  people: Person[];
  assignments: Assignment[];
};

const projects = [
    {id: 1, name: 'A', startAt: new Date('2026-04-01'), endAt: new Date('2026-05-01'), budget: 1000000},
]

const peoples = [
    {id: 1, email: 'a@n.com', unitCost: 200000},
]

const assignments = [
    {id: 1, projectId: 1, personId: 1, startAt: new Date('2026-04-01'), endAt: new Date('2026-05-01'), utilizationRate: 50},
]

const store: Store = {projects: projects, people: peoples, assignments: assignments}


//　正常系
test('正常に計算される', () => {
    const totalCost = calcTotalCost(1, store);
    expect(totalCost).toBe(100000);
});

// //　警戒値　- 0になるケース
// test('', () => {
    
// });

// //　異常値 - projectIdがないケース
// test('', () => {
    
// });