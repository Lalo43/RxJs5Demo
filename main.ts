import { Observable, Observer } from "rxjs";
import { ArrayObservable } from "rxjs/observable/ArrayObservable";
import { ForkJoinObservable } from "rxjs/observable/ForkJoinObservable";

let output = document.getElementById('output');
let input = document.getElementById('input');
let button = document.getElementById('button');
let click = Observable.fromEvent(button,'click');

let button1 = document.getElementById('button1');
let click1 = Observable.fromEvent(button,'click1');
let output1 = document.getElementById('output1');
/*source.subscribe(new MyObservable);*/

function load(url: string){
    return Observable.create(observer =>{
    let xhr = new XMLHttpRequest();

        xhr.addEventListener('load',() =>{

            if(xhr.status === 200){
                let jsonEjercicio = JSON.parse(xhr.responseText);
                observer.next(jsonEjercicio);
                observer.complete();
            }else{
                observer.error(xhr.statusText);
            }        
                  
        }); 

        xhr.open('GET', url)
        xhr.send();

    });    
}

function renderEjercicio(jsonEjercicio){
    jsonEjercicio.forEach(element => {
            let div = document.createElement('div');
            div.innerText = `${element.name}`;
            output.appendChild(div);  
    }); 
}


click.flatMap(x => load('ejercicioobs.json'))
     .subscribe((x: any) => Observable.from(x).filter((x: any) => x.calif >=60).subscribe(
         x =>console.log(x.name)));


click.flatMap(x => load('ejercicioobs.json'))
.subscribe((x: any) => Observable.from(x).max((x: any) => x.calif).subscribe(
    x =>console.log(x.calif)));

