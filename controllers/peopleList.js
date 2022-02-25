// xử lý hiện kết quả render ra giao diện cho người dùng

import { TableInfo } from '../models/TableInfo.js';
import { People } from '../models/People.js';

// Lấy thông tin được lưu từ localStorage ra;
TableInfo.getThongTin(); // lấy thông tin người dân được lưu trong localStorage ra để render ra giao diện

// Trong đây chúng ta sẽ render ra giao diện người dùng
const renderTableThongTin = (mangThongTin) => {
  // Lặp qua mảng thông tin
  let content = '';

  for (let thongTinLocal of mangThongTin) {
    let people = new People();

    people = { ...people, ...thongTinLocal }; // lấy giá trị của thongTinLocal đè lên people
  }
};
