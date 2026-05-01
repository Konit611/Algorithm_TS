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

/*
  プロジェクトとそれに関わる人員のアサインを表現したモデルです。
  上記モデルを利用して、あるプロジェクトにかかる人件費の総額を求める関数とそのテストケースを記載してください。
  
  ・祝日は考慮しなくて大丈夫です。

  Assingmentされた人の１人日で計算すれば良い。
  Projectごとのbudgetを超えてしまった場合の処理は必要 -> 無視する
  utilizationRate → 稼働率 -> 10日のAssingmentで50％だったら、５人日として計算

  storeの中にprojectIdの間がない場合 -> エラーをthrowする。
*/

type Store = {
  projects: Project[];
  people: Person[];
  assignments: Assignment[];
};
type calcTotalCost = (projectId: number, store: Store) => number;

type WorkDaysForPerson = {
    personId: number;
    workdays: number;
};

const calcDays = (startAt: Date, endAt: Date, utilizationRate: number): number => {

    const diffTime = Math.abs(endAt.getTime() - startAt.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays * utilizationRate / 100;
}

export const calcTotalCost = (projectId: number, store: Store): number => {
    // storeからprojectIdで検索。-> ない場合はエラーをThrowする。
    const targetProjectArray = store.projects.filter((project) => project.id === projectId);

    if (targetProjectArray.length === 0) {
        throw Error('該当するProject IDがございません。')
    }

    // store.assignmentsの中で、projectIdでフィルターをする。
    const assingmentForProjectArray = store.assignments.filter((assingment) => assingment.projectId === projectId);

    // フィルターされたAssingmentのPersonIdとutilizationRateをもとに、personごとの稼働人日を計算する。
    const workdaysForPersons: WorkDaysForPerson[] = assingmentForProjectArray.map((assigment) => {
        return {personId: assigment.personId, workdays: calcDays(assigment.startAt, assigment.endAt, assigment.utilizationRate)}
    })

    // people配列から、上のものを見て、unitCostを掛け算する。
    let projectCost = 0;
    for (const workdaysForPerson of workdaysForPersons) {
        const currentPerson = store.people.filter((person) => person.id === workdaysForPerson.personId)[0];
        const currentCost = currentPerson ? (currentPerson.unitCost / 30) * workdaysForPerson.workdays : 0;

        projectCost += currentCost
    }
    
    return Math.ceil(projectCost);
}

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

console.log(calcTotalCost(1, store));