"use strict";
// FBI Deva Test File
// Copyright ©2000-2026 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:23611854073385645700 LICENSE.md
// Thursday, January 29, 2026 - 7:30:14 AM

const {expect} = require('chai')
const FBIDeva = require('./index.js');

describe(FBIDeva.me.name, () => {
  beforeEach(() => {
    return FBIDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(FBIDeva).to.be.an('object');
    expect(FBIDeva).to.have.property('agent');
    expect(FBIDeva).to.have.property('vars');
    expect(FBIDeva).to.have.property('listeners');
    expect(FBIDeva).to.have.property('methods');
    expect(FBIDeva).to.have.property('modules');
  });
})
