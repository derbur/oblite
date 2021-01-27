import { Observable } from '../src/oblite';

let myObservable = new Observable(0);

myObservable.subscribe(logUpdate);

let count: number = 0;

function logUpdate(o: number, n: number) {
  console.log(`old value: ${o} | new value: ${n}`);
  count += n;
}

myObservable.set(1);
console.log(count);
myObservable.set(2);
console.log(count);