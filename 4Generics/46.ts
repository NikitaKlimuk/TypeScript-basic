function processingData<T>(data: T): T {
  //... some code here
  return data;
}

let res1 = processingData(1);
let res2 = processingData("1");

const num = 10;
const res3 = processingData<number>(num);

interface PrintUK {
  design: number;
}

interface PrintES {
  design: string;
}

interface Print<T> {
  design: T;
}

const somePrint: Print<string> = {
  design: "ten",
};

const someOtherPrint: Print<number> = {
  design: 10,
};

// Array<T>   Array of types (build in TS generic)
// RefferalSystem<UserID, UserReferrals>; hard way
// T U V S P K V easy way
export {};
