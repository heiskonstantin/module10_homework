let x;
switch (typeof x) {
    case 'number':
        console.log("x - число");
        break;
    case 'string':
        console.log("x - строка");
        break;
    case 'boolean':
        console.log("x - логический тип");
        break;
    default:
        console.log("тип x не определен");
        break;
}