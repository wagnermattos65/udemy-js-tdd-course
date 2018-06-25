var expect = require('chai').expect;
var calc = require('../src/js/main.js');

describe('calc', function() {
  //smoke tests
  describe('Smoke Tests', function() {
    it('should exist the calc lib', function() {
      expect(calc).to.exist;
    });

    it('should exist the method sum', function() {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method sub', function() {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exist the method mul', function() {
      expect(calc.mul).to.exist;
      expect(calc.mul).to.be.a('function');
    });

    it('should exist the method div', function() {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });

  });

  describe('Sum',function() {
    it('should return 4 when sum(2,2)', function() {
      expect(calc.sum(2,2)).to.be.equal(4);
    })
  });

  describe('Sub',function() {
    it('should return 2 when sub(4,2)', function() {
      expect(calc.sub(4,2)).to.be.equal(2);
    })

    it('should return -2 when sub(2,4)', function() {
      expect(calc.sub(2,4)).to.be.equal(-2);
    })
  });

  describe('Mul',function() {
    it('should return 4 when mul(2,2)', function() {
      expect(calc.mul(2,2)).to.be.equal(4);
    })
  });

  describe('Div',function() {
    it('should return 2 when div(4,2)', function() {
      expect(calc.div(4,2)).to.be.equal(2);
    })

    it('should return 0.5 when div(2,4)', function() {
      expect(calc.div(2,4)).to.be.equal(0.5);
    })

      it('should return "Nao é possivel divisao por zero" when divide by zero', function() {
      expect(calc.div(4,0)).to.be.equal('Nao é possivel divisao por zero');
    })
});

});
