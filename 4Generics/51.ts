// Build in TS generics
const arr: Array<number> = [1, 2, 3];
const arr1: number[] = [1, 2, 3];

const roArr: ReadonlyArray<string> = ["string"];
// roArr[0] = 'newString' err

interface IState {
  data: {
    name: string;
  };
  tag?: string;
}

const state: Partial<IState> = {
  data: {
    name: "John",
  },
};

const strictState: Required<IState> = {
  data: {
    name: "string",
  },
  tag: "some str",
};

function action(state: Readonly<IState>) {
  state.data.name = "new abc"; // works only at 1 flor, no error
  // state.data = "new abc"; err because readonly generic
}
