export class Observable {
  value: string | number | boolean;
  observers: Function[];

  constructor(initialValue: string | number | boolean);

  subscribe(fn: Function): void;
  unsubscribe(fn: Function): void;
  notify(oldValue: string | number | boolean): void;
  set(newValue: string | number | boolean): void;
}
