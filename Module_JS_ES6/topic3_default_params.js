//hàm được đn với các tham số có giá trị mặc định
function add(a = 10, b = 20) {
    return a + b;
}
const sum = (a, b = 15) => a + b;

console.log(add());
console.log(add(5, 10));
console.log(add(5));
console.log(sum(5, 10));
console.log(sum(20));
