# Oblite
A lightweight typescript observable! 👀

How to observe:
```
import { Observable } from 'oblite';

// Create the observable
let myObservable = new Observable(0);

// A function that logs the observable's value before & after the update
function logUpdate(o: number, n: number) {
  console.log(`old value: ${o} | new value: ${n}`);
}

// Subscribe logUpdate() to myObservable
myObservable.subscribe(logUpdate);

// old value: 0 | new value: 1
myObservable.set(1);

// old value: 1 | new value: 2
myObservable.set(2);
```