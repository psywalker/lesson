import { books1, books2 } from '../books';

describe('test all books', () => {
  describe('test books1', () => {
    it('add book', () => {
      const book = books1();
      expect(book.getCollection()).toMatchObject([]);
    });
  });

  describe('test books2', () => {
    it('add one book', () => {
      const book = books2();
      book.addBook('author1', 'bookName1');
      expect(book.getCollection().length).toBe(1);
    });

    it('add two book', () => {
      const book = books2();
      book.addBook('author1', 'bookName1');
      book.addBook('author1', 'bookName2');
      expect(book.getCollection().length).toBe(1);
      expect(book.getCollection()[0].size).toBe(3);
    });

    it('remove one book', () => {
      const book = books2();
      book.addBook('author1', 'bookName1');
      book.addBook('author1', 'bookName2');
      book.addBook('author1', 'bookName3');

      let bookValues = book.getCollection()[0].values();
      let newBookValues = [];
      for (const b of bookValues) newBookValues.push(b);
      expect(newBookValues.includes('bookName2')).toBe(true);

      book.removeBook('bookName2');
      bookValues = book.getCollection()[0].values();
      newBookValues = [];
      for (const b of bookValues) newBookValues.push(b);
      expect(newBookValues.includes('bookName2')).toBe(false);
    });

    it('get map author', () => {
      const book = books2();
      book.addBook('author1', 'bookName1');
      book.addBook('author1', 'bookName2');
      const bookAuthor = book.getAuthor('author1');
      expect(bookAuthor.size).toBe(3);
    });

    it('get author book', () => {
      // Что тут должно возвращаться?
    });
  });
});