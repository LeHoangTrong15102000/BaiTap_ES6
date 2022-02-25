// Xử lý cho việc người dân nhập vào từ input , select

import { People } from '../models/People';
import { TableInfo } from '../models/TableInfo';

// tạo đối tượng CD
let tableInfo = new TableInfo();

// Lấy thông tin từ TableInfo
tableInfo.getInfo();

// Xây dựng hàm khi nhấn vào nút click
export const funcInfo = () => {
  // tạo đối tượng công dân
  let people = new People();

  // Tạo ra mảng chứa các nội dung của thẻ input ,select, textarea
  let arrInput = document.querySelectorAll(
    '#signup-form input, #signup-form select'
  );

  // dùng vòng lặp để lặp qua từng đối tượng trong mảng
  for (let input of arrInput) {
    // Mỗi lần lặp lấy ra id và value của thẻ đó luôn
    let { id, value } = input;

    // Kiểm tra loại đối tượng
    if (id === 'loaiDoiTuong') {
      people['maDoiTuong'] = value;

      // Input đang là select khi chạy đến loại đối tượng
      people['loaiDoiTuong'] = input.options[input.selectedIndex].innerHTML;
    } else {
      people[id] = value; // Những trường còn lại gán từng giá trị của thẻ đối tượng
    }
  }

  // Sau khi đã lấy hết tất cả các thông tin người dân thì gọi hàm thêm thông tin vào danh sách thông tin
  tableInfo.addPeople(people);

  //
};
