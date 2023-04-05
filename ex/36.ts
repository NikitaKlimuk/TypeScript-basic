let num: Number = new Number(5);
let num2: number = 5;
let num3 = Number(5);

//Number != number
num = num2;
// num2 = num; error

const number = 5;
const srtNum: string = num.toString();
const string = "5";
const numString: number = +string;

interface Department {
  name: string;
  budget: number;
}

const department: Department = {
  name: "web-dev",
  budget: 50000,
};

interface Project {
  name: string;
  projectBudget: number;
}

// const mainProject: Project = {
//   ...department,
//   projectBudget: 5000,
// };

function tranformDepartment(department: Department, amount: number): Project {
  return {
    name: department.name,
    projectBudget: amount,
  };
}

const mainProject: Project = tranformDepartment(department, 4000);

export {};
