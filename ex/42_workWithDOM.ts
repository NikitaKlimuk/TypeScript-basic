// How to wok manualy with DOM

const box = document.querySelector(".box") as HTMLElement;

// box?.textContent = "some string";
const input = document.querySelector("input");

input?.value;

const link = document.querySelector("a");

if (link) {
  link.href = "someNewLink";
}

const p = document.querySelector(".paragraph") as HTMLParagraphElement;

const lins = document.querySelectorAll("a");
// NodeListOf<HTMLAnchorElement>

const elem = document.createElement("a");
// HTMLAnchorElement

link?.addEventListener("click", (e) => {
  e.preventDefault();
});
