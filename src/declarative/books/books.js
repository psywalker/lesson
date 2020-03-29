export const books1 = () => {
  let collection = [];

  return {
    addBook: (author, bookName) => {
      collection = [...collection, { autor: author, name: bookName }];
      return collection;
    },
    removeBook: (name) => {
      collection = [...collection.filter((book) => book.name !== name)];
      return collection;
    },
    getBook: (name) => collection.filter((book) => book.name === name)[0],
    getCollection: () => collection,
  };
};

export const books2 = () => {
  let collection = [];

  const makeBook = (author, bookName) => (
    new Map([
      [author, author],
      [bookName, bookName],
    ])
  );

  return {
    addBook: (author, bookName) => {
      let isAutor = false;
      collection.forEach((item) => {
        if (item.has(author)) {
          isAutor = true;
          item.set(bookName, bookName);
        }
      });
      if (!isAutor) {
        collection = [...collection, makeBook(author, bookName)];
      }
    },
    removeBook: (bookName) => {
      collection.forEach((item) => {
        for (const entry of item) {
          if (entry[1] === bookName) {
            item.delete(bookName);
          }
        }
      });
    },
    getAuthor: (author) => {
      let newAuthor = [];
      collection.forEach((item) => {
        if (item.has(author)) {
          newAuthor = item;
        }
      });
      return newAuthor;
    },
    getBook: (bookName) => {
      const booksArr = [];
      collection.forEach((item) => {
        for (const entry of item) {
          if (entry[1] === bookName) booksArr.push(item.entries());
        }
      });
      return booksArr;
    },
    getCollection: () => collection,
  };
};
