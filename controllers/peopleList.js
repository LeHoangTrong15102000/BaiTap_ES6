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


    content += `
      <tr>
        <td>${people.tenCD}</td>
        <td>${people.hoCD}</td>
        <td>${people.email}</td>
        <td>${people.soDienThoai}</td>
        <td>${people.ngaySinh}</td>
        <td>${people.thangSinh}</td>
        <td>${people.namSinh}</td>
        <td>${people.diaChi}</td>
        <td>${people.thongTinDiChuyen}</td>
        <td>${people.loaiDoiTuong}</td>

        <td>
          <button class="btn btn-danger" onClick="xoaMonAn('${people.soDienThoai}')"></button>
        </td>
      </tr>      
    `
  }

  document.querySelector("#tBodyTable").innerHTML = content
  return content;
};

renderTableThongTin(menu.mangThongTin)

// Hàm xóa thông tin người dân
function xoaThongTin(soDienThoaiClick) {
  // Gọi ra phương thức xóa món ăn trong đối tượng TableInfo
  TableInfo.deletePeople(soDienThoaiClick);

  // Sau đó lưu lại vào
  TableInfo.saveThongTin();

  // Render lại giao diện khi xóa
  renderTableThongTin(TableInfo.mangThongTin);
}

window.xoaThongTin = xoaThongTin

