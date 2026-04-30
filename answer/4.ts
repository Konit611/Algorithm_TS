// 問題 1: パスワードバリデーション (Validation)
// ユーザーが入力したパスワードが、システムのセキュリティポリシーに適合するか判定する関数を作成してください。

// 要件
// 1. 結果を返すための型 PasswordResult を定義すること。
// - isValid: boolean
// - errors: string[]（エラーがない場合は空配列）

// 2. 関数 validatePassword(password: string): PasswordResult を作成すること。

// 3. バリデーションルール：
// - 8文字以上であること。
// - 大文字を1文字以上含むこと。
// - 数字を1文字以上含むこと。

type PasswordResult = {
    isValid: boolean;
    errors: string[];
}

const vaildatePassword = (password: string): PasswordResult => {
    let answer: PasswordResult = {isValid: true, errors: []};

    const ERROR_MESSAGE_FOR_COUNT = 'ERROR_MESSAGE_FOR_COUNT';
    const ERROR_MESSAGE_FOR_UPPERCASE = 'ERROR_MESSAGE_FOR_UPPERCASE';
    const ERROR_MESSAGE_FOR_NUMERIC = 'ERROR_MESSAGE_FOR_NUMERIC';

    // 1. 文字列をひとつづつ見る。
    const isValidCount: boolean = password.length >= 8 ? true : false;
    let isThereUpperCase: boolean = false;
    let isThereNumber: boolean = false;
    for (let pwString of password) {
        if (/[A-Z]/.test(pwString)) {
            isThereUpperCase = true;
        }

        if (/[0-9]/.test(pwString)) {
            isThereNumber = true;
        }

        if (isThereUpperCase && isThereNumber) break;
    }

    if (!isValidCount) {
        answer.errors.push(ERROR_MESSAGE_FOR_COUNT);
    }

    if (!isThereUpperCase) {
        answer.errors.push(ERROR_MESSAGE_FOR_UPPERCASE);
    }

    if (!isThereNumber) {
        answer.errors.push(ERROR_MESSAGE_FOR_NUMERIC);
    }

    if (answer.errors.length > 0) {
        answer.isValid = false;
    }

    return answer;
};

let exPw = 'hi';

vaildatePassword(exPw);