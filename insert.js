//let date = new Date().toISOString().substring(0, 10);

//let date = '2019-07-14';
let date = '2023-03-01';

db.termsOfUse.remove({issuedDate: date});
db.termsOfUse.insert({
  _id: new ObjectId(),
  created: date + "T12:00:00Z",
  issuedDate: date,
  contents: cat("terms_of_use_en.html").replace(" +", " "),
  translations: {
    de: cat("terms_of_use_de.html").replace(" +", " ")
  }
});

db.privacyStatements.remove({issuedDate: date});
db.privacyStatements.insert({
  _id: new ObjectId(),
  created: date + "T12:00:00Z",
  issuedDate: date,
  contents: cat("privacy_statement_en.html").replace(" +", " "),
  translations: {
    de: cat("privacy_statement_de.html").replace(" +", " ")
  }
});
