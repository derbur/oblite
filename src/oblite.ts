export class Observable {
  value: string | number | boolean;
  private observers: Function[];

  constructor(initialValue: string | number | boolean) {
    this.value = initialValue;
    this.observers = [];
  }

  subscribe(fn: Function) { 
    this.observers.push(fn)
  }

  unsubscribe(fn: Function) { 
    this.observers = this.observers.filter(ob => ob !== fn)
  }

  private notify(oldValue: string | number | boolean) {
    this.observers.forEach(fn => fn.call(null, oldValue, this.value))
  }

  set(newValue: string | number | boolean) {
    const old = this.value;
    this.value = newValue;
    this.notify(old);
  }
}
