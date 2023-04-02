//typeof
function doSomething(x: number | string) {
  if (typeof x === "string") {
    console.log(x.subtr(1));
    console.log(x.substring(1));
  }
  x.substring(1);
}

// instanceOf
class Foo {
  foo = 123;
  common = "123";
}

class Bar {
  bar = 123;
  common = "123";
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo);
    console.log(arg.bar);
  }
  if (arg instanceof Bar) {
    console.log(arg.foo);
    console.log(arg.bar);
  }

  console.log(arg.common);
  console.log(arg.foo);
  console.log(arg.bar);
}
