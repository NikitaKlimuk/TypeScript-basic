//let userName: string = "Ivan";
// userName.isInteger();
// userName = 5;
var isBirthdayData = true;
var ageData = 40;
var userNameData = "John";
// function logBrtMsg(isBirthday: boolean, username: string, age: number): string {
//     if (isBirthday) {
//         return `Congrats ${username.toUpperCase()}, age: ${age + 1}`;
//     } else {
//         return "error";
//     }
// }
var logBrtMsg = function (isBirthday, username, age) {
    if (isBirthday) {
        return "Congrats ".concat(username.toUpperCase(), ", age: ").concat(age + 1);
    }
    else {
        return "error";
    }
};
logBrtMsg(isBirthdayData, userNameData, ageData);
