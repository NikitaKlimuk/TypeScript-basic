const test: null = null;
const test2: any = null;

// Ошибка с включенной проверкой
const test3: string = null;
const test4: number = null;

const test5: undefined = undefined;
const test6: any = undefined;
const test7: number = undefined;

function getRandomData() {
    if (Math.random() < 0.5) {
        return null;
    } else {
        return "  Some data     ";
    }
}

const data = getRandomData();
const trimmedData = data ? data.trim() : null;
