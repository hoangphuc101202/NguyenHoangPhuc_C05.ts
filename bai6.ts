import { question } from "readline-sync";
/**
 * 
 * @param n Nhap n
 * @returns So do co phai so chinh phuong hay khong
 */
function isPerfectSquare(n: number): boolean{
    const sqrtN = Math.floor(Math.sqrt(n));
    return sqrtN * sqrtN ===n;

}
/**
 * 
 * @param m Xet m
 * @param n xet n
 * @returns Tim so chinh phuong dau tien trong doan tu m den n
 */
function FirstPerfectSquare(m: number, n: number): number{
    for(let i : number = m ; i <= n;i++){
        if(isPerfectSquare(i)){
            return i;
        }
    }
    return -1;

}
/**
 * Tra ve so chinh phuong dau tien trong doan tu m - n
 */
function cnPerfect():void{
    const m : number = Number(question("Nhap m:"));
    const n : number = Number(question("Nhap n: "));
    const Perfect = FirstPerfectSquare(m,n);
    if(Perfect !== -1){
        console.log("So chinh phuong dau tien la "+Perfect);

    }
    else{
        console.log("Khong tim thay");
    }
}
cnPerfect();