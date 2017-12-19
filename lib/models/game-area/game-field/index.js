'use strict';
const Bridge = require('./bridge/bridge');
const Road = require('./road/road');
const Grassfield = require('./grassfield/grassfield');
const River = require('./river/river');
const Woods = require('./woods/woods');
const Castle = require('./castle/castle');
const RoadDrunkenWizard = require('./road/road-drunken-wizard');
const WoodWildBoar = require('./woods/woods-wild-boar');
const RoadAxeRobber = require('./road/road-axe-robber');
const Mountain = require('./mountain/mountain');
const Hall = require('./inn/inn-1');
const Borthel = require('./inn/inn-2');
const Cave = require('./cave/cave');
const CaveKey = require('./cave/cave-key');
const RoadSignTable = require('./road/road-sign-table');
const RoadCoboldThief = require('./road/road-cobold-thief');

module.exports = {
  0:  new Woods(),         1: new Woods(),  2: new Woods(),  3: new Woods(),               4: new Woods(),       5: new Woods(),       6: new Woods(),       7: new RoadCoboldThief(), 8: new Cave(),       9:  new CaveKey(),
  10: new Woods(),        11: new Woods(), 12: new Woods(), 13: new Woods(),              14: new Woods(),      15: new Woods(),      16: new Woods(),      17: new Road(),           18: new Mountain(),   19: new Mountain(),
  20: new Woods(),        21: new Woods(), 22: new Woods(), 23: new Woods(),              24: new Woods(),      25: new Woods(),      26: new Woods(),      27: new Road(),           28: new Grassfield(), 29: new Grassfield(),
  30: new Woods(),        31: new Woods(), 32: new Woods(), 33: new Woods(),              34: new Woods(),      35: new Woods(),      36: new Woods(),      37: new Road(),           38: new Grassfield(), 39: new Grassfield(),
  40: new River(),        41: new River(), 42: new Bridge(),43: new River(),              44: new River(),      45: new Castle(),     46: new River(),      47: new Bridge(),         48: new River(),      49: new River(),
  50: new Woods(),        51: new Woods(), 52: new Woods(), 53: new Borthel(),            54: new Woods(),      55: new Road(),       56: new Woods(),      57: new RoadAxeRobber(),  58: new Grassfield(), 59: new Grassfield(),
  60: new Woods(),        61: new Woods(), 62: new Woods(), 63: new Hall(),               64: new Road(),       65: new Road(),       66: new Road(),       67: new RoadSignTable(),  68: new Grassfield(), 69: new Grassfield(),
  70: new WoodWildBoar(), 71: new Woods(), 72: new Woods(), 73: new Road(),               74: new Grassfield(), 75: new Grassfield(), 76: new Grassfield(), 77: new Grassfield(),     78: new Grassfield(), 79: new Grassfield(),
  80: new Grassfield(),   81: new Woods(), 82: new Woods(), 83: new Road(),               84: new Grassfield(), 85: new Grassfield(), 86: new Grassfield(), 87: new Grassfield(),     88: new Grassfield(), 89: new Grassfield(),
  90: new Grassfield(),   91: new Road(),  92: new Road(),  93: new RoadDrunkenWizard(),  94: new Grassfield(), 95: new Grassfield(), 96: new Grassfield(), 97: new Grassfield(),     98: new Grassfield(), 99: new Grassfield() 
};
