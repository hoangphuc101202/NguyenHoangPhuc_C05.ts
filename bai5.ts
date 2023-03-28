import { question } from "readline-sync";
/**
 * 
 * @param n Xet n
 * @returns Xet phai so hoan thien khong
 */
function isPerfectNumber ( n: number): boolean{
    let sum = 0;
    for(let i: number = 1;i<n;i++){
        if(n%i==0){
            sum+=i;
        }
    }
    return sum ===n;

}
/**
 * Nhap n tu ban phim
 * KT so n co phai so hoan thien hay khong
 */
function cnPerfect():void{
    const n : number = Number(question("Nhap n: "));
    if(isPerfectNumber(n)){
        console.log(`${n} la so hoan thien`);
    }
    else{
        console.log(`${n} khong la so hoan thien`);
    }
}
cnPerfect();