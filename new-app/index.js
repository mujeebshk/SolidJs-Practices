// Import Express.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// This variable defines the port of your computer where the API will be available
const PORT = 4000;

// This variable instantiate the Express.js library
let app = express();

// Indicate to Express.js that you're using an additional plugin to treat parameters
app.use(
  cors({
    origin: "*",
  })
);
// The code below starts the API with these parameters:
// 1 - The PORT where your API will be available
// 2 - The callback function (function to call) when your API is ready
app.listen(PORT, () =>
  console.log(`The Books API is running on: http://localhost:${PORT}.`)
);

// The code below creates a GET route with these parameters:
// 1 - The route where the code will be executed
// 2 - The function containing the code to execute
app.get("/", (request, response) => {
  // The string we want to display on http://localhost:3000
  response.json({ Name: "column" });
});
// Static variable containing your books
let bookList = [
  "1 . In Search of Lost Time by Marcel Proust. ...",
  "2 . Ulysses by James Joyce. ...",
  "3 . Don Quixote by Miguel de Cervantes. ...",
  "4 . One Hundred Years of Solitude by Gabriel Garcia Marquez. ...",
  "5 . The Great Gatsby by F. ...",
  "6 . Moby Dick by Herman Melville. ...",
  "7 . War and Peace by Leo Tolstoy. ...",
  "8 . Hamlet by William Shakespeare.",
  "9 . Make Time: How to Focus on what Matters Every Day",
  "10 . The Power Of Habit",

  // {
  //   color: "red",
  //   value: "#f00",
  // },
  // {
  //   color: "green",
  //   value: "#0f0",
  // },
  // {
  //   color: "blue",
  //   value: "#00f",
  // },
  // {
  //   color: "cyan",
  //   value: "#0ff",
  // },
  // {
  //   color: "magenta",
  //   value: "#f0f",
  // },
  // {
  //   color: "yellow",
  //   value: "#ff0",
  // },
  // {
  //   color: "black",
  //   value: "#000",
  // },
];
let bkList = ["Make Time:", "trhnobrubn"];

// Replace the route name
app.get("/books", (request, response) => {
  // The function will return your bookList in a JSON
  // Sample: { allBooks: ["Make Time: How to Focus on what Matters Every Day", "The Power Of Habit"]}
  return response.json({ allBooks: bookList, myBook: bkList });
});

// Replace the GET method by POST
// Reminder: POST in the API world is used to ADD a data
app.post("/books", (request, response) => {
  // TODO: Fill the function
  // We get the parameter 'name' from the body
  const bookName = request.body.name;

  // We check if the book list includes the new book
  // If it is, we return 'false'
  // if (bookList.includes(bookName)) return response.json({ success: false });
  console.log(bookName);
  // Otherwise, we add the new book in the list and return 'true'
  bookList.push(bookName);

  return response.send("Book is added to the database");
});

app.delete("/books", (request, response) => {
  // We get the parameter 'name' from the body
  const bookToDelete = request.body.name;

  // We create a new array with all elements different from the book to delete
  bookList = bookList.filter((book) => book !== bookToDelete);

  // We return the new list
  return response.json({ allBooks: bookList });
});

app.put("/books", (request, response) => {
  // We get the parameters 'nameToUpdate' and 'updatedName' from the body
  const bookToUpdate = request.body.nameToUpdate;
  const updatedBook = request.body.updatedName;

  // We search if the book to update is in the list
  const indexOfBookToUpdate = bookList.findIndex(
    (book) => book === bookToUpdate
  );

  // If it is not a book from the list, we return 'false'
  if (indexOfBookToUpdate === -1) return response.json({ success: false });

  // Otherwise, we replace the name and return 'true'
  bookList[indexOfBookToUpdate] = updatedBook;
  return response.json({ success: true });
});
