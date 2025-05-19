function fnWithArrayParam(number=[]) {
    return number.reduce((acc, curr) => acc + curr, 0); //0 là gt ban đầu của acc
}
console.log(fnWithArrayParam([1, 2, 3, 4, 5])); //15

//Sử dụng tham số rest -> linh hoạt các đn hàm có tham số
function fnRestParam(...number) {
    return number.reduce((acc, curr) => acc + curr, 0); //0 là gt ban đầu của acc
}
console.log(fnRestParam(1, 2, 3, 4, 5, 6)); //21
console.log(fnRestParam(10, 20, 30)); //60
console.log(fnRestParam([2, 4, 6, 8, 10])); //[2, 4, 6, 8, 10] -> 0 -> Sai

//Sử dụng toán tử spread (toán tử phân tán) -> chuyển đổi mảng thành các tham số riêng lẻ
const n1 = [1, 2, 3];
const n2 = [4, 5, 6];
const n3 = [...n2, true, "Hello", ...n1]; //4, 5, 6, true, "Hello", 1, 2, 3
console.log(n3);

//Kết hợp rest và spread
console.log(fnRestParam(...n2)); 

