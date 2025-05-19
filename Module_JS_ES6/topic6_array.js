//khai báo mảng
const number = [15, 25, 35, 45, 55];
//thay đổi giá trị của phần tử trong mảng
number[2] = 10;
//duyệt và in ra các phần tử trong mảng
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}
//read-only
for (let item of number) {
    console.log(item);
}
//hàm map()
number?.map(item => console.log(item));
//khai báo mảng chứa các đối tượng
const student = [
    { id: 1, name: "Nguyen Van A", gender: true },
    { id: 2, name: "Nguyen Van B", gender: false },
    { id: 3, name: "Nguyen Van C", gender: true }
];
student?.map(s => console.log(`Student info: ${s.id} - ${s.name} - ${s.gender? 'Nam' : 'Nu'}`));
