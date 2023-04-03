interface Car {
  name: "car";
  engine: string;
  wheels: string;
}

interface Ship {
  name: "ship";
  engine: string;
  sail: string;
}

interface Airplane {
  name: "airplane";
  engine: string;
  wings: string;
}

interface ComplexVehilce {
  name: "car" | "ship" | "airplane";
  engine?: string;
  wheels?: string;
  sail?: string;
  wings?: string;
}

function isCar(car: Vehicle): car is Car {
  return "wheels" in car;
}

function isShip(ship: Vehicle): ship is Ship {
  return "sail" in ship;
}

type Vehicle = Car | Ship | Airplane;

const car: ComplexVehilce = {
  name: "car",
  engine: "V8",
};

function repairVehicle(vehicle: ComplexVehilce): void {
  switch (vehicle.name) {
    case "car":
      console.log(vehicle.wheels * 2);
      break;
    case "ship":
      console.log(vehicle.sail);
      break;
    case "airplane":
      console.log(vehicle.wings);
      break;
    default:
      // const smth: never = vehicle;
      console.log("Some error");
  }
}

export {};
