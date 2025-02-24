export function validateEmail(email: unknown): email is string {
    return (
        typeof email === 'string' &&
        email.length >= 3 &&
        email.length <= 31 //&&
        ///^[a-z0-9_-]+$/.test(email)
    );
}

export function validatePassword(password: unknown): password is string {
    return typeof password === 'string' && password.length >= 6 && password.length <= 255;
}

export function validateName(name: unknown): name is string {
    return typeof name === 'string' && name.length >= 2 && name.length <= 24;
}

export function validateDay(day: unknown): day is number {
    return typeof day === 'number' && day >= 1 && day <= 31;
}

export function validateMonth(month: unknown): month is number {
    return typeof month === 'number' && month >= 1 && month <= 12;
}

export function validateYear(year: unknown, maxYears: number, minYears: number): year is number {
    let date = new Date()
    return typeof year === 'number' && year >= (date.getFullYear() - maxYears) && year <= (date.getFullYear() - minYears);
}

export function validateDate(month: number, date: number, year: number) {
    let newDate = new Date()
    newDate.setFullYear(year, month - 1, date)

    if(newDate.getFullYear() != year || newDate.getMonth() != (month - 1) || newDate.getDate() != date) {
        return false
    }

    return true
}

