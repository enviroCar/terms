//let date = new Date().toISOString().substring(0, 10);

//let date = '2019-07-14';
let date = '2023-03-01';

db.termsOfUse.remove({issuedDate: date});
db.privacyStatements.remove({issuedDate: date});
