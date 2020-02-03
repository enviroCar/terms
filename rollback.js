//let date = new Date().toISOString().substring(0, 10);

let date = '2019-07-14';

db.termsOfUse.remove({issuedDate: date});
db.privacyStatements.remove({issuedDate: date});
