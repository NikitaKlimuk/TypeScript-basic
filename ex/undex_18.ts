const message: string | number | null = 3;

const messages: string[] | null = ["a", "b"];

function printMsg(msg: string | number): void {
    console.log(msg);
}

printMsg(4);
printMsg("some string here");
