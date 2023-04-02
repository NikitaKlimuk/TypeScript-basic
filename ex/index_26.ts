type validationAmount = "empty" | number;

interface ClothesWarehouse {
  jackets: validationAmount;
  hats: validationAmount;
  socks: validationAmount;
  pants: validationAmount;
}

interface StationeryWarehouse {
  scissors: validationAmount;
  paper: "empty" | boolean;
}

interface AppliancesWarehouse {
  dishwashers: validationAmount;
  cookers: validationAmount;
  mixers: validationAmount;
}

interface TotalWarehouse
  extends ClothesWarehouse,
    StationeryWarehouse,
    AppliancesWarehouse {
  deficit: boolean;
  date: Date;
}

const totalData: TotalWarehouse = {
  jackets: 5,
  hats: "empty",
  socks: "empty",
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: "empty",
  mixers: 14,
  deficit: true,
  date: new Date(),
};

function printReport(data: TotalWarehouse): string {
  const result: string = Object.entries(data)
    .filter((item) => item[1] === "empty")
    .reduce((res, item) => `${res} ${item[0]},`, "");
  return result.trim().length
    ? `We need this items:${result.slice(0, -1)}`
    : "Everything fine";
}

console.log(printReport(totalData));
