const { auth } = require('@tensei/auth');
const { tensei } = require('@tensei/core');
const { rest } = require('@tensei/rest');

tensei()
  .plugins([
    auth().noCookies().plugin(),
    rest().basePath('http://localhost:3000/').plugin(),
  ])
  .db({
    type: 'sqlite',
    dbName: 'commerce.sqlite',
  })
  .start();
