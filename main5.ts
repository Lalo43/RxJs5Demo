import { Observable, Observer } from "rxjs";

let number = [1, 5, 10,43];
let source2 = Observable.from(number).map(x => x*2).filter(x => x>=10);
let source = Observable.create((observer) =>{
 

        let index = 0;
        let produceValue = () => {
            observer.next(number[index++])
            if(index < number.length){
                setTimeout(()=>{
                    produceValue();
                },1000);
            }else{
                observer.complete();
            }
        }
        produceValue();
    }).map(x => x*2).filter(x => x>=10);


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

source2.subscribe(
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