let input = +prompt("пожалуйста, введите значение", '');
if (typeof input === Number && isNaN(input)) {
    console.log('упс, кажется вы ошиблись');
} else if (input % 2 === 0) {
    console.log ('число четное');
} else {
    console.log ('число нечетное')
}