import { expect } from 'chai';

describe(`@sample/core`, () => {
  describe(`package.json`, () => {
    let PACKAGE;
    before(() => {
      PACKAGE = require('../dist/package.json');
    });

    it(`should exist`, () => {
      expect(PACKAGE).to.be.ok;
    });

    it(`should be named '@sample/core'`, () => {
      expect(PACKAGE['name']).to.equal('@sample/core');
    });

    it(`should reference "module" bundle (FESM2015)`, () => {
      expect(PACKAGE['module']).to.equal('fesm2015/sample-core.js');
    });

    it(`should reference "es2015" bundle (FESM2015)`, () => {
      expect(PACKAGE['es2015']).to.equal('fesm2015/sample-core.js');
    });

    it(`should reference "typings" files`, () => {
      expect(PACKAGE['typings']).to.equal('sample-core.d.ts');
    });

    it(`should have 'scripts' section removed`, () => {
      expect(PACKAGE['scripts']).to.be.undefined;
    });

    it(`should keep the 'sideEffects: true' flag`, () => {
      expect(PACKAGE['sideEffects']).to.be.true;
    });
  });
});
