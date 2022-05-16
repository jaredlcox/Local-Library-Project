function findAccountById(accounts, id) {
//   It returns the account object that has the matching ID.
  return accounts.find((account) => account.id === id);
//  here I am using .find to loop through the accounts array and creating an account function that "finds" an account.id that matches the id input by the user;
}

function sortAccountsByLastName(accounts) {
//   It returns a sorted array of the provided account objects. The objects are sorted alphabetically by last name.
  return accounts.sort((accountA, accountB) => {
    const lastNameA = accountA.name.last;
    const lastNameB = accountB.name.last;
    return lastNameA.toLowerCase() < lastNameB.toLowerCase() ? -1: 1;
  });
}

function getTotalNumberOfBorrows(account, books) {
//   It returns a _number_ that represents the number of times the account's ID appears in any book's `borrows` array.
  const result = books.reduce((acc, book) => {
    let count = book.borrows.filter((b) => b.id === account.id).length;
    acc +=count;
    return acc;
  }, 0)
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  const booksBorrowed = books.filter((book) => {
    return book.borrows[0].id === accountId && !book.borrows[0].returned
  });
  booksBorrowed.forEach((book) => {
    const foundAuthor = authors.find((author) => author.id === book.authorId);
    book.author = foundAuthor;
  })
  return booksBorrowed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
