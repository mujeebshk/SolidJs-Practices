const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
let books = [
  {
    bookName: "Rudest Book Ever",
    bookAuthor: "Shwetabh Gangwar",
    bookPages: 200,
    bookPrice: 240,
    bookState: "Available",
  },
  {
    bookName: "Do Epic Shit",
    bookAuthor: "Ankur Wariko",
    bookPages: 200,
    bookPrice: 240,
    bookState: "Available",
  },
];
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: "*",
  })
);
app.get("/", function (req, res) {
  res.send(
    books
    //
  );
});
app.post("/", (req, res) => {
  const inputBookName = req.body.bookName;
  const inputBookAuthor = req.body.bookAuthor;
  const inputBookPages = req.body.bookPages;
  const inputBookPrice = req.body.bookPrice;
  console.log(req.body);
  books.push({
    bookName: inputBookName,
    bookAuthor: inputBookAuthor,
    bookPages: inputBookPages,
    bookPrice: inputBookPrice,
    bookState: "Available",
  });
  res.send(req.body);
});
app.put("/issue", (req, res) => {
  var requestedBookName = req.body.bookName;
  books.forEach((book) => {
    if (book.bookName == requestedBookName) {
      book.bookState = "Issued";
    }
  });
  res.send(req.body);
});
app.put("/return", (req, res) => {
  var requestedBookName = req.body.bookName;
  books.forEach((book) => {
    if (book.bookName == requestedBookName) {
      book.bookState = "Available";
    }
  });
  res.send(req.body);
});
app.delete("/delete", (req, res) => {
  var requestedBookName = req.body.bookName;
  var j = 0;
  books.forEach((book) => {
    j = j + 1;
    if (book.bookName == requestedBookName) {
      books.splice(j - 1, 1);
    }
  });
  res.send(req.body);
});
app.listen(4000, (req, res) => {
  console.log("App is running on port 4000");
});
