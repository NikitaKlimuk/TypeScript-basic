//conditional types

//SomeType extends OtherType ? TrueType : FalseType
type Example = "string" extends "Hello" ? string : number;
type ExampleStr = "string" extends string ? string : number;

const str: string = "Hello";
// type ExampleExample = "string" extends  ? string : number;

type FromUserOrFromBase<T extends string | number> = T extends string
  ? IDataFromUser
  : IDataFromBase;

interface User<T extends "created" | Date> {
  created: T extends "created" ? "created" : Date;
}

const user: User<"created"> = {
  created: "created",
};

interface IDataFromUser {
  weight: string;
}
interface IDataFromBase {
  calories: number;
}

// function calculateDailyCalories(str: string): IDataFromUser;
// function calculateDailyCalories(num: number): IDataFromBase;
function calculateDailyCalories<T extends string | number>(
  numOrStr: T
): FromUserOrFromBase<T> {
  if (typeof numOrStr === "string") {
    const obj: IDataFromUser = {
      weight: numOrStr,
    };
    return obj as FromUserOrFromBase<T>;
  } else {
    const obj: IDataFromBase = {
      calories: numOrStr,
    };
    return obj as FromUserOrFromBase<T>;
  }
}

type GetStringType<T extends "hello" | "world" | string> = T extends "hello"
  ? "hello"
  : T extends "world"
  ? "world"
  : string;

type GetFirstType<T> = T extends Array<infer First> ? First : T;

type Ex = GetFirstType<string[]>;

type ToArray<Type> = Type extends any ? Type[] : never;

type ExArray = ToArray<Ex | number>;

export {};
