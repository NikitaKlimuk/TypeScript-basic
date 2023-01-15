const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

const userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: "John",
    messages: {
        error: "Error",
    },
};

const createError = (msg: string) => {
    throw new Error(msg);
};

function logBrtMsg({
    isBirthdayData,
    userNameData,
    ageData,
    messages: { error },
}: {
    isBirthdayData: boolean;
    userNameData: string;
    ageData: number;
    messages: { error: string };
}): string {
    if (isBirthdayData) {
        return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
    } else {
        return createError("Error");
    }
}
// console.log(logBrtMsg(userData));

const departments: string[] = ["dev", "design", "marketing"];
const department = departments[0];

departments.push("some string");

const report = departments
    .filter((d: string) => d !== "dev")
    .map((d: string) => `${d} - done`);

const nums: number[][] = [
    [2, 4, 7, 8],
    [2, 4, 7, 8],
];

const [first] = report;
console.log(report);
