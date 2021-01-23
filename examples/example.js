import { Observable } from '../src/lite-observable.js';

let myObservable = new Observable(0);

myObservable.subscribe(logUpdate);

let count = 0;

function logUpdate(o, n) {
  console.log(`old value: ${o} | new value: ${n}`);
  count += n;
}

myObservable.set(1);
console.log(count);
myObservable.set(2);
console.log(count);