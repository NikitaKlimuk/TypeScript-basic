// Mapped types
type Currencies = {
  usa: "usd";
  china: "cny";
  ukraine: "uah";
  belarus: "byn";
};

type CreateCustomCurr<T> = {
  readonly [P in keyof T]?: string;
};

type CustomCyrrencies = CreateCustomCurr<Currencies>;

type ROnlyCurr = Readonly<Currencies>;

// type CustomCurrencies = {
//   usa: string;
//   china: string;
//   ukraine: string;
//   belarus: string;
// };

// type СопостовимыйТип = {
//   [произвольныйИдентификатор in Множество]: ПроизвольныйТипДанных;
// };

type Keys = "name" | "age" | "role";

type User = {
  [K in Keys]: string;
};

const alex: User = {
  name: "Alex",
  age: "25",
  role: "admin",
};

export {};
