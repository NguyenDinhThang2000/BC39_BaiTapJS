/* BÀI TẬP VỀ NHÀ
Bài 1. Mô hình 3 khối
CT: lương 1 ngày * số ngày làm
- Đầu vào:
+ Lương 1 ngày: 100000
+ Số ngày làm: 30
- Xử lí:
+ Tiền lương= Lương 1 ngày * số ngày làm
- Đầu ra:
+ Tiền lương
*/

var luong1ngay = 100000;
var songay = 30;
var tienluong = luong1ngay * songay;
console.log("Tiền lương nhân viên:" + tienluong);

/* Bài 2.
CT: Tổng 5 số chia 5
- Đầu vào:
+ 5 số thực: so1 =10; so2 =20; so3 =30; so4 =40; so5 =50;
- Xử lí:
+ Tổng 5 số thực / 5
  (so1 + so2 + so3 + so4 + so5) /5
- Đầu ra:
+ Giá trị trung bình 5 số
*/

var so1 = 10;
var so2 = 20;
var so3 = 30;
var so4 = 40;
var so5 = 50;
var trungbinh5so = (so1 + so2 + so3 + so4 + so5) / 5;
console.log("Trung bình 5 số:" + trungbinh5so);

/* Bài 3.
CT: Số tiền USD * 23500 VND
- Đầu vào: sotienUSD = 5 USD, giatri1USD = 23500 VVD
- Xử lí:
+ quydoi = sotienUSD * giatri1USD
- Đầu ra:
+ Số tiền quy đổi VND
*/

var sotienUSD = 5;
var giatri1USD = 23500;
var quydoi = sotienUSD * giatri1USD;
console.log("Số tiền quy đổi VND:" + quydoi + "VND")

/* Bài 4.
CT:Diện tích = dai*rong ; chuvi = (dai + rong)*2
- Đầu vào: dai = 10; rong = 5;
- Xử lí :
+ dientich = dai * rong
+ chuvi = (dai + rong) * 2
- Đầu ra:
+ Diện tích và chu vi hình chữ nhật
*/
var dai = 10;
var rong = 5;
var dientich = dai * rong;
var chuvi = (dai + rong) * 2;
console.log("Diện tích hình chữ nhật:" + dientich);
console.log("Chu vi hình chữ nhật:" + chuvi);

/* Bài 5
CT: Lấy 2 kí số cộng lại với nhau
- Đầu vào: số n = 19 => sohangchuc = 10; sohangdonvi = 9
- Xử lí :
+ sohangchuc = 19%10;
+ sohangdonvi = 19/10;
+ tong2kiso = sohangchuc + sohangdonvi;
- Đầu ra:
+ Tổng 2 kí số của số 19
*/
var n = 19;
var sohangchuc = 19 % 10;
var sohangdonvi = 19 / 10;
var tong2kiso = sohangchuc + sohangdonvi;
console.log("Tổng 2 kí số của số 19:" + tong2kiso);





































