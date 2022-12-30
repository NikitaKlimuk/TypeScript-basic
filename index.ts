//let userName: string = "Ivan";

// userName.isInteger();
// userName = 5;

const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

// function logBrtMsg(isBirthday: boolean, username: string, age: number): string {
//     if (isBirthday) {
//         return `Congrats ${username.toUpperCase()}, age: ${age + 1}`;
//     } else {
//         return "error";
//     }
// }

const logBrtMsg = (
    isBirthday: boolean,
    username: string,
    age: number
): string => {
    if (isBirthday) {
        return `Congrats ${username.toUpperCase()}, age: ${age + 1}`;
    } else {
        return "error";
    }
};

logBrtMsg(isBirthdayData, userNameData, ageData);
