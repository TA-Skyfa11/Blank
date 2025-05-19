//Khai báo thành phần
const student = {id : 1, name: "Nguyen Van A", dob: "2000-01-01"}
const display = ({name, price}) => console.log(`Name: ${name} - Price: ${price}`);
//Export để sử dụng trong các module khác
export {student, display};