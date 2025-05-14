//sử dụng lamda expression định nghĩa hàm
const primeNumber = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i + " ");
    }
}
//ko có tham số và gt trả về
const primeNumber1 = () => {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
//có tham số và gt trả về
const sumNumber = (a, b, c) => a + b + c;    

primeNumber(5);
primeNumber1();
console.log("Sum of number: " + sumNumber(10, 20, 30));