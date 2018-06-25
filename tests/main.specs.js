describe('Main Tests', function() {
  describe('Method A', function() {
    context('Case 1', function() {
      it('Should happen ...', function() {
        //espera que aconteça
        //entra dados / metodo sum(2,2)
        //espera retornar (4) => true | (3) => false => test broken
        throw new Error('just an error.');
      });
    });
    context.only('Case 2', function() {
      it.skip('Should happen this ...', function() {
        //espera que aconteça
        //entra dados / metodo sum(2,2)
        //espera retornar (4) => true | (3) => false => test broken
      });
      it('Should happen that...', function() {
        //espera que aconteça
        //entra dados / metodo sum(2,2)
        //espera retornar (4) => true | (3) => false => test broken
        throw new Error('just an error.');
      });

    });
  })

  describe('Method B', function() {

  });
});
