let a: number = 5;
let b: string = 'test';
let c: boolean = true;
let d: any;
let e: number[] = [1,2,3,4,5];
let f: Array<number> = [1,2,3,4,5];
let g: any[] = ['test', 2, true];
let h: [string, boolean, number] = ['test', true, 5];

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {kredi=0, havale=1, eft=2};

let kredi = Payment.kredi;
let havale = Payment.havale;
let eft = Payment.eft;