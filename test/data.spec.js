global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');



describe('filtrar feedlabel', () => {
  const data =[{
    feedlabel: "TF2 Blog"

  },
  {
    feedlabel: "Product Update"
  },
  {
    feedlabel: "PC Gamer"
  }
]

  it('debería ser una función', () => {
    assert.deepEqual(typeof filterData, 'function');
  });

  it('debería retornar "PC Gamer"', () => {
    assert.deepEqual(window.filterData(data,"PC Gamer"), ([{feedlabel:"PC Gamer"}]));

  });
})
