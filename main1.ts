import { Observable, Observer } from "rxjs";

let number = [1, 5, 10,43];
let source = Observable.from(number);

class MyObservable implements Observer<number> {
    next(value: number){
        console.log(`ValueOK: ${value}`);
    };
    error(err: any){
        console.log(`Error: ${err}`);
    };
    complete(){
        console.log(`Complete`);
    };
}

/*source.subscribe(new MyObservable);*/

source.subscribe(
    value => {
        console.log(`value: ${value}`);
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);