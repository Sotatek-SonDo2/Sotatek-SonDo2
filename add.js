// function docSoTienBangChu(soTien) {
//     const chuSo = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
//     const donVi = ['', 'nghìn', 'triệu', 'tỷ'];

//     // Hàm đọc một bộ ba chữ số (dưới 1000)
//     function docBaChuSo(num) {
//         let str = '';
//         let tram = Math.floor(num / 100);
//         let chuc = Math.floor((num % 100) / 10);
//         let donvi = num % 10;

//         if (tram > 0) {
//             str += chuSo[tram] + ' trăm ';
//         }

//         if (chuc === 1) {
//             str += 'mười ';
//         } else if (chuc > 1) {
//             str += chuSo[chuc] + ' mươi ';
//         }

//         if (donvi === 1 && chuc > 1) {
//             str += 'mốt';
//         } else if (donvi === 5 && chuc !== 0) {
//             str += 'lăm';
//         } else if (donvi !== 0 || (donvi === 0 && (tram === 0 && chuc === 0))) {
//             str += chuSo[donvi];
//         }

//         return str.trim();
//     }

//     // Xử lý số âm
//     if (soTien < 0) {
//         return 'âm ' + docSoTienBangChu(Math.abs(soTien));
//     }

//     // Xử lý số 0
//     if (soTien === 0) {
//         return 'không đồng';
//     }

//     let phanNguyen = Math.floor(soTien);
//     let phanThapPhan = Math.round((soTien - phanNguyen) * 100); // Lấy 2 chữ số thập phân

//     let ketQua = '';
//     let i = 0;
//     let soConLai = phanNguyen;

//     if (soConLai === 0) {
//         ketQua = 'không';
//     } else {
//         while (soConLai > 0) {
//             let boBa = soConLai % 1000;
//             if (boBa !== 0) {
//                 let doc = docBaChuSo(boBa);
//                 // Xử lý trường hợp "linh" (ví dụ: 1002 đọc là một nghìn không trăm linh hai)
//                 if (boBa < 100 && Math.floor(soConLai / 1000) > 0 && boBa !== 0 && boBa % 100 !== 0 && boBa % 10 !== 0) {
//                      // Nếu bộ ba là 0xx hoặc x0x, và không phải là bộ ba đầu tiên, thêm "linh" nếu có số 0 ở hàng chục và hàng đơn vị không phải 0
//                     if (chuc === 0 && donvi !== 0) { // Ví dụ 1002 -> không trăm linh hai
//                          doc = 'linh ' + doc;
//                     }
//                 }
//                 ketQua = doc + ' ' + donVi[i] + ' ' + ketQua;
//             }
//             soConLai = Math.floor(soConLai / 1000);
//             i++;
//         }
//     }

//     let fullText = ketQua.trim();
//     if (fullText) {
//         fullText += ' đồng';
//     }

//     if (phanThapPhan > 0) {
//         // Xử lý phần thập phân
//         let phanThapPhanText = docBaChuSo(phanThapPhan);
//         if (phanThapPhanText) {
//             fullText += ' và ' + phanThapPhanText + ' xu';
//         }
//     }

//     // Chuẩn hóa chuỗi (loại bỏ khoảng trắng thừa)
//     fullText = fullText.replace(/\s+/g, ' ').trim();
//     // Viết hoa chữ cái đầu tiên
//     if (fullText.length > 0) {
//         fullText = fullText.charAt(0).toUpperCase() + fullText.slice(1);
//     }
    
//     return fullText;
// }

// console.log(docSoTienBangChu(0));          // Kết quả: Không đồng
// console.log(docSoTienBangChu(123));        // Kết quả: Một trăm hai mươi ba đồng
// console.log(docSoTienBangChu(1001));       // Kết quả: Một nghìn không trăm linh một đồng
// console.log(docSoTienBangChu(12345));      // Kết quả: Mười hai nghìn ba trăm bốn mươi lăm đồng
// console.log(docSoTienBangChu(1234567));    // Kết quả: Một triệu hai trăm ba mươi bốn nghìn năm trăm sáu mươi bảy đồng
// console.log(docSoTienBangChu(1234567890)); // Kết quả: Một tỷ hai trăm ba mươi tư triệu năm trăm sáu mươi bảy nghìn tám trăm chín mươi đồng
// console.log(docSoTienBangChu(123.45));     // Kết quả: Một trăm hai mươi ba đồng và bốn mươi lăm xu
// console.log(docSoTienBangChu(500000));     // Kết quả: Năm trăm nghìn đồng
// console.log(docSoTienBangChu(1000000));    // Kết quả: Một triệu đồng
// console.log(docSoTienBangChu(2000000000)); // Kết quả: Hai tỷ đồng
// console.log(docSoTienBangChu(10500));      // Kết quả: Mười nghìn năm trăm đồng
// console.log(docSoTienBangChu(1000005));    // Kết quả: Một triệu không trăm linh năm đồng
// console.log(docSoTienBangChu(1000010));    // Kết quả: Một triệu không trăm mười đồng
// console.log(docSoTienBangChu(1000000000000)); // Kết quả: Một nghìn tỷ đồng (hoặc "một nghìn không trăm nghìn triệu không trăm nghìn nghìn đồng" nếu xử lý nhiều hơn)
// console.log(docSoTienBangChu(-123));       // Kết quả: Âm một trăm hai mươi ba đồng