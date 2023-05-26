interface ICompany {
  name: string;
  debts: number;
  departments: Department[];
  management: {
    owner: string;
  };
}

interface Department {
  [key: string]: string;
}

const debts = "debts";
type CompanyDebtsType = ICompany[typeof debts];

type CompanyDebtsType2 = ICompany["debts"];
type CompanyOwnerType = ICompany["management"]["owner"];
type CompanyDepartmensType = ICompany["departments"][number];
type CompanyDepartmensTypes = ICompany["departments"];
type Test = ICompany[keyof ICompany];

type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = "name";

function printDebts<T, K extends keyof T, S extends keyof T>(
  company: T,
  name: K,
  debts: S
) {
  console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const google: ICompany = {
  name: "google",
  debts: 5000000,
  departments: [
    {
      sales: "sales",
      developer: "dev",
    },
  ],
  management: {
    owner: "Alex",
  },
};

printDebts(google, "name", "debts");

type GoogleKeys = keyof typeof google;
const keys2: GoogleKeys = "debts";
