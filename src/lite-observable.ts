export class Observable {
  value: string | number | boolean
  observers: Function[]

  constructor(initialValue: string | number | boolean) {
    this.value = initialValue;
    this.observers = [];    
  }

  subscribe(f: Function) { 
    this.observers.push(f)
  }

  unsubscribe(f: Function) { 
    this.observers = this.observers.filter(ob => ob !== f)
  }

  notify(oldValue: string | number | boolean) {
    this.observers.forEach(f => f.call(null, oldValue, this.value))
  }

  set(newValue: string | number | boolean) {
    let old = this.value;
    this.value = newValue;
    this.notify(old);
  }

}
