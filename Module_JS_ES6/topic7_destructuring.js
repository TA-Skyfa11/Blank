//Kỹ thuật phân rã: object/array
//Tạo ra các biến mới từ các thuộc tính của đối tượng/phần tử của array
const student = {id: 1, name: "Nguyen Van", dob: "2000-01-01"}

const product = [
    { id: 1, name: "Iphone", price: 1000 },
    { id: 2, name: "Samsung", price: 2000 },
    { id: 3, name: "Oppo", price: 3000 }
]
//Phân rã đối tượng
const { id, name } = student;
//Sau khi phân rã -> đổi tên thành biến mới
const { id: id1, name: name1, dob: dob1 } = student;

console.log(`${id} - ${name}`);
console.log(`${id1} - ${name1} - ${dob1}`);

//Truyền 1 đối tượng vào hàm để thực thi
const printInfo = (data) => `Student info: ${data?.id} - ${data?.name} - ${data?.dob}`;
console.log(printInfo(student));

//Phân rã mảng
const [item1, item2, item3] = product;
console.log(item1);
console.log(item2);
console.log(item3);

//Duyệt các phần tử của mảng product -> In ds data
product?.map(({ id, name, price }) => console.log(`${id} - ${name} - ${price}`));


