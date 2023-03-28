import { question } from "readline-sync";
/**
 * hàm Nhập R
 * @returns Trả về giá trị R
 */
function NhapR(): number {
    let R : number ;
    do{
        R = Number(question("Nhap R: "));
    }
    while(R<=0);
    return R;
}
/**
 * Lấy trá trị R từ hàm Nhập
 * @returns Trả về giá trị Chu Vi
 */
function TinhChuVi(): number {
    const R = NhapR();
    const CV = Math.floor(R*3.14);
    return CV;
}
/**
 * gán tính chu vi vào d
 */
const d = TinhChuVi();
/**
 * Tính diện tích 
 * @returns Trả về giá trị diện tích
 */
function TinhDienTich() : number{
    
    const S = Math.floor(d*3.14);
    return S;
}

let DT : number = TinhDienTich();
console.log(`Vay Chu vi la ${d}`);
console.log(`Vay dien tich la ${DT}`);
