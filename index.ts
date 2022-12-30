//let userName: string = "Ivan";

// userName.isInteger();
// userName = 5;

const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

// Лучше избегать таких записей и сразу указывать тип
let salary;
salary = 5000;

// function logBrtMsg(isBirthday: boolean, username: string, age: number): string {
//     if (isBirthday) {
//         return `Congrats ${username.toUpperCase()}, age: ${age + 1}`;
//     } else {
//         return "error";
//     }
// }

const userData =
    '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';

const userObj: {
    isBirthdayData: boolean;
    userNameData: string;
    ageData: number;
} = JSON.parse(userData);

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
