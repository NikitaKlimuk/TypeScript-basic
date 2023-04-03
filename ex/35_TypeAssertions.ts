const fetchData = (url: string, method: "GET" | "POST"): void => {
  console.log("Fetched");
};

const reqOptions = {
  url: "https://someurl.com",
  method: "GET" as "GET",
};

// const reqOptions = {
//   url: "https://someurl.com",
//   method: "GET",
// } as const;

const str = "str";
const method = "GET";

fetchData("qqq", "GET");
fetchData(reqOptions.url, method);

fetchData(reqOptions.url, reqOptions.method as "GET");
// fetchData(reqOptions.url, <"GET">reqOptions.method); // the same type assertions

const box = document.querySelector(".box") as HTMLElement;
box.style;
box?.classList;

// const someNumber: number = input.value as any as number; //double assertions, двойное утверждение типов
