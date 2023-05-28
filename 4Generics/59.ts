// Template literal types
// Utility types
type Currencies = {
  usa: "usd";
  china: "cny";
  ukraine: "uah";
  belarus: "byn";
};

type CurrWithoutUSA = Omit<Currencies, "usa">; // исключение
type CurrUSAAndUkraine = Pick<Currencies, "usa" | "ukraine">; // фильтрация по сво-ву
type CountriesWithoutUSA = Exclude<keyof Currencies, "usa">;

type FadeType = Exclude<MyAnimation, "swipe">; // удаление из union type
type SwipeType = Extract<MyAnimation | Direction, "swipe">; // вытаскиваем из union type

type CreateCustomCurr<T> = {
  [P in keyof T as `custom${Capitalize<string & P>}`]: string;
};

type PlayersNames = "alex" | "john";
type GameDataCurr = Record<PlayersNames, CustomCyrrencies>;

const gameData: GameDataCurr = {
  alex: {
    customChina: "qqq",
    customBelarus: "bbb",
    customUkraine: "uu",
    customUsa: "aaa",
  },
  john: {
    customChina: "qqq",
    customBelarus: "bbb",
    customUkraine: "uu",
    customUsa: "aaa",
  },
};

type CustomCyrrencies = CreateCustomCurr<Currencies>;

type MyAnimation = "fade" | "swipe";
type Direction = "in" | "out";

type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;

export {};
