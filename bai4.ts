import { question } from "readline-sync";

function DocSo():void{
        let n : number;
    do{
       n = Number(question("Nhap vao so nguyen"));
    }while(n<10);
    const ones = [' ','mot','hai','ba','bon','nam','sau','bay','tam','chin'];
    const tens = [' ','muoi','hai muoi', 'ba muoi', 'bon muoi', 'nam muoi', ' sau muoi', 'bay muoi', 'tam muoi', 'chin muoi'];
    if( n < 10 || n > 99){
        console.log("So khong hop le");
    }
    else{
        let onesDigit = n % 10;
        let tensDigit = Math.floor(n/10);
        console.log(`${n} được đọc là ${tens[tensDigit]} ${ones[onesDigit]}`);
    }
}
DocSo();