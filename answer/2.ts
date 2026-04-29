// 第2問：ユーザーデータの整形とクレンジング
// 【要件】
// APIから取得したユーザー情報の配列を、管理画面での利用を想定した「IDをキーとするオブジェクト形式」に変換してください。
// 
// email プロパティが存在しないユーザーは、不正なデータとして 除外 すること。
// 
// firstName と lastName を結合し、新しいプロパティ fullName を作成すること。
// 
// age が未定義（undefined）の場合は、デフォルト値として 0 を割り当てること。

interface RawUser {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
  age?: number;
}

const rawUsers: RawUser[] = [
  { id: 101, firstName: "Taro", lastName: "Sato", email: "taro@example.com", age: 25 },
  { id: 102, firstName: "Hanako", lastName: "Tanaka", age: 30 }, // emailなし -> 除外
  { id: 103, firstName: "John", lastName: "Doe", email: "john@example.com" }, // ageなし -> 0
];

interface UserData {
    id: number;
    fullName: string;
    email: string;
    age: number;
}

interface UserMap {
    [key: number]: UserData;
}

const userDataForAdminPage = (rawUsers: RawUser[]): UserMap => {
    const userDatas: UserMap = {};

    for (let rawUser of rawUsers) {
        if (!rawUser.email) continue;

        const fullName = `${rawUser.firstName} ${rawUser.lastName}`;
        const age = rawUser.age ? rawUser.age : 0;

        userDatas[rawUser.id] = {id: rawUser.id, fullName: fullName, email: rawUser.email, age: age};
    }

    return userDatas;
}

console.log(userDataForAdminPage(rawUsers));