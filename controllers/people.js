// Xử lý cho việc người dân nhập vào từ input , select

import { People } from '../models/People.js';
import { TableInfo } from '../models/TableInfo.js';

// tạo đối tượng CD
let tableInfo = new TableInfo();

// Lấy thông tin từ TableInfo
// tableInfo.getThongTin();

// Xây dựng hàm khi nhấn vào nút click
export function funcInfo() {
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
    if (id === 'loaiNhiem') {
      people['maDoiTuong'] = value;

      // Input đang là select khi chạy đến loại đối tượng
      people['loaiNhiem'] = input.options[input.selectedIndex].innerHTML;
    } else {
      people[id] = value; // Những trường còn lại gán từng giá trị của thẻ đối tượng
    }
  }

  // Sau khi đã lấy hết tất cả các thông tin người dân thì gọi hàm thêm thông tin vào danh sách thông tin
  tableInfo.addPeople(people);

  // Lưu lại trên localStorage() sau khi đã thêm thông tin và thiển thị nó lên table
  tableInfo.saveThongTin();

  // *********************************** Phần xử lý render ra giao diện

  // Lấy thông tin được lưu từ localStorage ra;
  tableInfo.getThongTin(); // lấy thông tin người dân được lưu trong localStorage ra để render ra giao diện

  // Xây dựng hàm render ra giao diện
  let content = '';

  for (let thongTinLocal of tableInfo.mangThongTinCD) {
    let people = new People();

    people = { ...people, ...thongTinLocal }; // lấy giá trị của thongTinLocal đè lên people

    content += `
      <tr>
        <td>${people.ten}</td>
        <td>${people.ho}</td>
        <td>${people.email}</td>
        <td>${people.soDienThoai}</td>
        <td>${people.ngay}</td>
        <td>${people.thang}</td>
        <td>${people.nam}</td>
        <td>${people.diaChi}</td>
        <td>${people.thongTinDiChuyen}</td>
        <td>${people.loaiNhiem}</td>

        <td>
          <button class="btn btn-danger" onClick="xoaMonAn('${people.soDienThoai}')">Xóa</button>
        </td>
      </tr>      
    `;

    document.querySelector('#tBodyTable').innerHTML = content;
    return content;
  }

  // Xóa thông tin người dân
  tableInfo.deletePeople(people.soDienThoai);

  // Sau khi xóa lưu lại trên localStorage và sau đó render ra lại giao diện
  tableInfo.saveThongTin();

  // Lấy thông tin được lưu từ localStorage ra;
  tableInfo.getThongTin(); // lấy thông tin người dân được lưu trong localStorage ra để render ra giao diện

  // Render ra lại giao diện
  let content1 = '';

  for (let thongTinLocal of tableInfo.mangThongTinCD) {
    let people = new People();

    people = { ...people, ...thongTinLocal }; // lấy giá trị của thongTinLocal đè lên people

    content1 += `
      <tr>
        <td>${people.ten}</td>
        <td>${people.ho}</td>
        <td>${people.email}</td>
        <td>${people.soDienThoai}</td>
        <td>${people.ngay}</td>
        <td>${people.thang}</td>
        <td>${people.nam}</td>
        <td>${people.diaChi}</td>
        <td>${people.thongTinDiChuyen}</td>
        <td>${people.loaiNhiem}</td>

        <td>
          <button class="btn btn-danger" onClick="xoaMonAn('${people.soDienThoai}')">Xóa</button>
        </td>
      </tr>      
    `;

    document.querySelector('#tBodyTable').innerHTML = content;
    return content;
  }
}

// Viết hàm render ra giao diện
// function renderTableThongTin(mangThongTin) {
//   // Lặp qua mảng thông tin
//   let content = '';

//   for (let thongTinLocal of mangThongTin) {
//     let people = new People();

//     people = { ...people, ...thongTinLocal }; // lấy giá trị của thongTinLocal đè lên people

//     content += `
//       <tr>
//         <td>${people.tenCD}</td>
//         <td>${people.hoCD}</td>
//         <td>${people.email}</td>
//         <td>${people.soDienThoai}</td>
//         <td>${people.ngaySinh}</td>
//         <td>${people.thangSinh}</td>
//         <td>${people.namSinh}</td>
//         <td>${people.diaChi}</td>
//         <td>${people.thongTinDiChuyen}</td>
//         <td>${people.loaiDoiTuong}</td>

//         <td>
//           <button class="btn btn-danger" onClick="xoaMonAn('${people.soDienThoai}')"></button>
//         </td>
//       </tr>
//     `;
//   }

//   document.querySelector('#tBodyTable').innerHTML = content;
//   return content;
// }

// renderTableThongTin(menu.mangThongTin);

// Hàm xóa thông tin người dân
// function xoaThongTin(soDienThoaiClick) {
//   // Gọi ra phương thức xóa món ăn trong đối tượng TableInfo
//   TableInfo.deletePeople(soDienThoaiClick);

//   // Sau đó lưu lại vào
//   TableInfo.saveThongTin();

//   // Render lại giao diện khi xóa
//   renderTableThongTin(TableInfo.mangThongTin);
// }

// window.xoaThongTin = xoaThongTin;
