import { expect } from 'chai';
import { sum, sub, mul, div } from '../src/js/main';

describe('calc', () => {
  //smoke tests
  describe('Smoke Tests', () => {
    it('should exist the method sum', function() {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method sub', function() {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist the method mul', function() {
      expect(mul).to.exist;
      expect(mul).to.be.a('function');
    });

    it('should exist the method div', function() {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });

  });

  describe('Sum', () => {
    it('should return 4 when sum(2,2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 2 when sub(4,2)', () => {
      expect(sub(4, 2)).to.be.equal(2);
    });

    it('should return -2 when sub(2,4)', () => {
      expect(sub(2, 4)).to.be.equal(-2);
    });
  });

  describe('Mul',() => {
    it('should return 4 when mul(2,2)', () => {
      expect(mul(2, 2)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('should return 2 when div(4,2)', () => {
      expect(div(4, 2)).to.be.equal(2);
    })

    it('should return 0.5 when div(2,4)', () => {
      expect(div(2, 4)).to.be.equal(0.5);
    })

    it('should return "Nao é possivel divisao por zero" when divide by zero', () => {
      expect(div(4, 0)).to.be.equal('Nao é possivel divisao por zero');
    })
});

});
