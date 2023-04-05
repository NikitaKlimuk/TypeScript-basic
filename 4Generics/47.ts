function processingData<T, S>(data: T[], options: S): string {
  data.length;

  switch (typeof data) {
    case "string":
      return `${data}, speed: ${options}`;
      break;
    case "number":
      return `${data}, speed: ${options}`;
      break;
    default:
      return "Not valid";
  }
}

let res1 = processingData([1], "fast");
let res2 = processingData(["1"], "slow");

const num = 10;
const res3 = processingData<number, string>([num], "slow");

function processing<T>(data: T): T {
  return data;
}

interface ProcessingFn {
  <T>(data: T): T;
}

let newFunc: ProcessingFn = processing;
// let newFunc: <T>(data: T) => T = processing;

interface DataServer {
  // processing: <T>(data: T) => T;
  // processing: typeof processing;
  processing: ProcessingFn;
}

const saver: DataServer = {
  // processing(data) {
  //   console.log(data);
  //   return data;
  // },
  // processing: (data) => {
  //   return data;
  // },
  processing: processing,
};

export {};
