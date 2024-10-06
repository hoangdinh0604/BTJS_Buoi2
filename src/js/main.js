//Bài tập ẩn mật khẩu
let hidePass = document.querySelector("#btnHide");
console.log("hidePass: ", hidePass);
hidePass.addEventListener("click", function () {
  let changeType = document.querySelector("#pass");
  if (changeType.type === "password") {
    changeType.type = "text";
  } else {
    changeType.type = "password";
  }
});

//Bài tập tính lương với giao diện
let btnTinhLuong = document.querySelector("#btnTinhLuong");
btnTinhLuong.addEventListener("click", function () {
  let tinhLuong = document.querySelector("#luong").value * 1;
  let tongTien = tinhLuong * 100000;
  let result = document.querySelector("#resultbt1");
  result.innerHTML += " " + tongTien;
});

//Bài tập tính điểm trung bình với giao diện
let btnTinhDiemTB = document.querySelector("#btnTinhDiemTB");
btnTinhDiemTB.addEventListener("click", function () {
  let diem1 = document.querySelector("#diem1").value * 1;
  let diem2 = document.querySelector("#diem2").value * 1;
  let diem3 = document.querySelector("#diem3").value * 1;
  let diem4 = document.querySelector("#diem4").value * 1;
  let diem5 = document.querySelector("#diem5").value * 1;
  let diemTB = (diem1 + diem2 + diem3 + diem4 + diem5) / 5;
  let result = document.querySelector("#resultbt2");
  result.innerHTML += " " + diemTB;
});
//Bài tập quy đổi tiền tệ
let btnQuyDoi = document.querySelector("#btnQuyDoi");
btnQuyDoi.addEventListener("click", function () {
  let tien = document.querySelector("#tien").value * 1;
  let tiGia = document.querySelector("#tiGia").value * 1;
  let tongTien = tien * tiGia;
  let result = document.querySelector("#resultbt3");
  result.innerHTML += " " + tongTien;
});
//Bài tập tính chu vi diện tích hình chữ nhật
let btnTinhToanHinh = document.querySelector("#btnTinhToanHinh");
btnTinhToanHinh.addEventListener("click", function () {
  let dai = document.querySelector("#dai").value * 1;
  let rong = document.querySelector("#rong").value * 1;
  let chuVi = (dai + rong) * 2;
  let dienTich = dai * rong;
  let result1 = document.querySelector("#resultbt4");
  result1.innerHTML += " " + chuVi;
  let result2 = document.querySelector("#resultbt5");
  result2.innerHTML += " " + dienTich;
});
