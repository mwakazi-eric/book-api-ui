import { useEffect, useState } from "react";
import { getAllBooks } from "../services/book.service";
import { BookDto } from "../types/BookDto";

function Home() {
  const [books, setBooks] = useState<BookDto[]>([]);

  useEffect(() => {
    getAllBooks()
      .then((response) => {
        console.log("response = ", response.data);
        setBooks(response.data);
      })
      .catch((error) => {
        console.log("error = ", error);
      });
  }, []);

  return (
    <>
      <h1 className="text-center mt-10 text-3xl font-bold">List of Books</h1>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-3 gap-4">
          {books.map((book) => (
            <div
              key={book.isbn}
              className="bg-gray-100 p-4 rounded-md flex flex-col justify-self-start"
            >
              <h2 className="text-lg font-bold">{book.title}</h2>
              <p className="text-sm">
                <strong>Author</strong>: {book.author}
              </p>
              <p className="text-sm">
                <strong>Price</strong>: $ {book.price}
              </p>
              <div className="flex my-2">
                <button className="flex-1 bg-yellow-600 text-white py-1 px-1 mr-2 rounded-md">
                  Edit
                </button>
                <button className="flex-1 bg-red-600 text-white py-1 px-1 rounded-md">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
