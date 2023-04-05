interface ProcessingFn {
  <T>(data: T): T;
}

function processing<T>(data: T): T {
  return data;
}

let newFunc: ProcessingFn = processing;

type Smth<T> = T;

const num: Smth<number> = 5;

interface ParentsOfUser {
  mother: string;
  father: string;
}

interface User<ParentsData extends ParentsOfUser> {
  login: string;
  age: number;
  parents: ParentsData;
}

const user: User<{ mother: string; father: string; married: boolean }> = {
  login: "string",
  age: 26,
  parents: {
    mother: "Anna",
    father: "no data",
    married: true,
  },
};

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

const data: OneOrMany<number[]> = [5, 4];

// another example

const depositMoney = <T extends number | string>(amount: T): T => {
  console.log(`req to server with amount: ${amount}`);
  return amount;
};

depositMoney(500);
depositMoney("500");
// depositMoney(false); err with not number or string

const depositMoney2 = (amount: number | string): number | string => {
  console.log(`req to server with amount: ${amount}`);
  return amount;
};

depositMoney(500);
depositMoney("500");
// depositMoney(false); err with not number or string

export {};
