const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

const createError = (msg: string) => {
    throw new Error(msg);
};

function logBrtMsg(isBirthday: boolean, username: string, age: number): string {
    if (isBirthday === true) {
        return `Congrats ${username.toUpperCase()}, age: ${age + 1}`;
    } else if (isBirthday === false) {
        return "Too bad";
    }
    return createError("Error");
}

logBrtMsg(isBirthdayData, userNameData, ageData);
