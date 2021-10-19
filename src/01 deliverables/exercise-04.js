console.log("************** DELIVERABLE 04 *********************");
// Read Book

function isBookRead(books, titleToSearch) {
  return books.some((book) => book.title === titleToSearch && book.isRead);
}

// Ejemplo:
var books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
