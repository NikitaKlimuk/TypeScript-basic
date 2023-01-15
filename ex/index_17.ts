const userdataTuple: [boolean, number, ...string[]] = [
    true,
    40,
    "John",
    "Alex",
    "Keks",
];
// Можно сделать только один спред в кортеже
// userdataTuple[0] = 'true'; Выдает ошибку
const [bthd, age, username] = userdataTuple;
