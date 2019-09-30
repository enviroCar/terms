let date = new Date().toISOString().substring(0,10)

db.termsOfUse.insert({
  _id: new ObjectId(),
  created: date + "T12:00:00Z",
  issuedDate: date,
  contents: cat("TOU_EN.html").replace("\n", "\\n").replace(" +", " "),
  translations: {
    de: cat("TOU_DE.html").replace("\n", "\\n").replace(" +", " ")
  }
});
