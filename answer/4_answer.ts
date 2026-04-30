type PasswordResult = {
    isValid: boolean;
    errors: string[];
}

const vaildatePassword = (password: string): PasswordResult => {
    const errors: string[] = [];

    const rules = [
        { test: password.length >= 8, error: 'ERROR_MESSAGE_FOR_COUNT' },
        { test: /[A-Z]/.test(password), error: 'ERROR_MESSAGE_FOR_UPPERCASE' },
        { test: /[0-9]/.test(password), error: 'ERROR_MESSAGE_FOR_NUMERIC' },
    ];

    rules.forEach(rule => {
        if (!rule.test) errors.push(rule.error);
    });

    return {
        isValid: errors.length === 0,
        errors
    };
};