export class Observable {
  value;
  observers;

  constructor(initialValue) {
    this.value = initialValue;
    this.observers = [];    
  }

  subscribe(fn) { 
    this.observers.push(fn)
  }

  unsubscribe(fn) { 
    this.observers = this.observers.filter(ob => ob !== fn)
  }

  notify(oldValue) {
    this.observers.forEach(fn => fn.call(null, oldValue, this.value))
  }

  set(newValue) {
    let old = this.value;
    this.value = newValue;
    this.notify(old);
  }

}
