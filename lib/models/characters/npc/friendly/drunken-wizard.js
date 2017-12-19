'use strict';

const oldStaff = require('../../../items/weapons/old-staff');

class DrunkenWizard {
  constructor () {
    this.name = 'varázsló';
    this.hp = 20;
    this.dmg = 4;
    this.def = 1;
    this.items = oldStaff;
    this.aggro = false;
    this.text = 'HUKK! Éjszakra vana kocsma! Ott beszélj a kocsmárossal, oszt majd ő helyrerak, hogy minek vagy a világon!'
  }
}

module.exports = DrunkenWizard;
