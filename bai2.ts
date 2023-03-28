import { question } from "readline-sync";
/**
 * Hàm nhập số lượng và đơn giá
 * @returns Trả về số tiền 
 */
function TinhTien(): number {
    const SoLuong : number = Number(question("Nhap so luong: "));
    const Gia : number = Number(question("Nhap Don Gia: "));
    return Gia*SoLuong;
}/**
 * gán hàm tính tiền vào a
 */
let a: number = TinhTien();
/**
 * Hàm tính thuế
 * @returns Trả về thuế của đơn giá
 */
function Thue(): number{
    return a * 10/100;

}
let VAT = Thue();
console.log("vay so tien: "+a);
console.log("Vay thue la: "+VAT);