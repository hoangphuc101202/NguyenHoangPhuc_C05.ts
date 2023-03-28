import { question } from "readline-sync";
/**
 * @param year cho nhập vào 1 năm
 * @returns Tra ve năm nhuận hay không nhuận
 */
function KTnamNhuan() :void{
    const year : number = Number(question("Nhap vao 1 nam: "));
    if(year%400 == 0){
        console.log("la nam Nhuan");
    }
    else if(year % 4 == 0 && year %100 != 0){
        console.log("La nam nhuan");
    }
    else{
        console.log("Khong phai nam nhuan");
    }
}
KTnamNhuan();