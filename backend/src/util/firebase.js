var admin = require("firebase-admin");
const { FIREBASE_SERVICE_ACCOUNT_JSON, FIREBASE_DATABASE_URL } = require("../config");
var serviceAccount = require(FIREBASE_SERVICE_ACCOUNT_JSON);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: FIREBASE_DATABASE_URL
});

module.exports = admin;

