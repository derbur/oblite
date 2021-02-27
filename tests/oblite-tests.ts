import { describe } from 'mocha';
import chai from 'chai';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Observable } from '../src/oblite';

chai.use(sinonChai);

describe('Observable', () => {
  it('should initialize the observable with a number', () => {
    const o = new Observable(0);
    expect(o.value).to.equal(0);
  });

  it('should initialize the observable with a string', () => {
    const o = new Observable('a string');
    expect(o.value).to.equal('a string');
  });

  it('should initialize the observable with a boolean', () => {
    const o = new Observable(true);
    expect(o.value).to.be.true;
  });

  it('should update the observable value', () => {
    const o = new Observable(0);
    expect(o.value).to.equal(0);
    o.set(1);
    expect(o.value).to.equal(1);
  });

  it('should call subscribed function on update', () => {
    const o = new Observable(0);
    const fn = sinon.spy();
    o.subscribe(fn);
    o.set(1);
    expect(fn).to.have.been.calledOnce;
  });

  it('should not call function after unsubscribing', () => {
    const o = new Observable(0);
    const fn = sinon.spy();
    o.subscribe(fn);
    o.unsubscribe(fn);
    o.set(1);
    expect(fn).to.not.have.been.called;
  });
});