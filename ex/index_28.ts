interface User {
  readonly login: string;
  password: string;
  age: number;
  addr?: string; // Union type
  // addr: string | undefined;
  parents?: {
    mother?: string;
    father?: string;
  };
}

const user: User = {
  login: "first",
  password: "qwerty",
  age: 26,
  // addr: "someString",
};

const userFreeze: Readonly<User> = {
  login: "first",
  password: "qwerty",
  age: 26,
};

// user.login = 'new login'; // err readonly prop

const dbName = "12345";
function sendUserData(obj: User, db?: string): void {
  console.log(obj.parents!.father?.toLowerCase(), db?.toLowerCase());
}

class Animal {
  readonly name: string = "name";
}

const basicPorts: readonly number[] = [3000, 3001, 5555];
// basicPorts[0] = 5; // err readonly prop

export {};
