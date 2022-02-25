// phần xử lý thông tin của người dân khi nhập vào form

// Xây dựng các thuộc tính đối tượng để thêm CD vào bảng lưu trên localStorage

export class TableInfo {
  mangThongTinCD = []; // ban đầu cho là mảng rỗng , [{...},{...}]

  constructors() {}

  // Xây dựng phương thức thêm công dân
  addPeople = (thongTinMoi) => {

      // Bất kì lệnh nào trong khối try xảy ra lỗi => hủy không chạy tiếp mà sẽ chạy và catch
      try {
        this.mangThongTinCD.push(thongTinMoi)
      } catch(ex) {
        console.log(ex)
        return false
      }
      return true; // Ngược lại thì return là true
  };


  // Xóa thông tin người dân
  deletePeople = (soDienThoaiClick) => {
    let index = this.mangThongTinCD.findIndex(thongTin => thongTin.soDienThoai === soDienThoaiClick) 

    if (index !== -1) {
      this.mangThongTinCD.splice(index, 1)

      return true;
    }
    

    return false;
  }


  // Lấy thông tin người dân truyền cung cấp qua form
  layThongTinNguoiDan = (soDienThoaiClick) => {
    let thongTin = this.mangThongTinCD.find(thongTin => thongTin.soDienThoai === soDienThoaiClick)

    // Nếu thông tin đó tồn tại thì trả về thông tin đó
    if (thongTin) {
      return thongTin
    }

    return undefined // Không thì trả về là undefined
  }

  // Cập nhât thông tin người dân
  capNhatThongTin = (soDienThoai, thongTinUpdate) => {
    let thongTin = this.layThongTinNguoiDan(soDienThoai)

    if (thongTin) {
      // nếu tồn tại thông tin đó

      // Duyệt qua từng key của object thông tin 
      for (let tenThuocTinh in thongTin) {
        // Mỗi lần duyệt qua gán giá trị mới của thông tin vừa sửa đổi cho giá trị thông tin cũ
        thongTin[tenThuocTinh] = thongTinUpdate[tenThuocTinh];
      }
    }
  }



  // Luu LocalStorage
  saveThongTin = () => {
    let sInfo = JSON.stringify(this.mangThongTinCD);
    localStorage.setItem('thongTin', sInfo);
  }

  // Lay du lieu tu LOcalStorage
  getThongTin = () => {
    // Nếu có localStorage thì ta mới lấy dữ liệu ra
    if (localStorage.getItem('thongTin'));

    // Lấy dữ liệu từ localStorage gans vao mảng thông tin của đối tượng
  }
}
