/*Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.*/

// Input array of books
const books = [
    { title: 'Book 1', author: 'john doe', year: 2005 },
    { title: 'Book 2', author: 'jane smith', year: 2015 },
    { title: 'Book 3', author: 'bob brown', year: 2008 },
    { title: 'Book 4', author: 'alice jones', year: 2012 },
];

// Function to capitalize the first letter of each word in a string
function capitalizeAuthorName(author) {
    return author.replace(/\b\w/g, match => match.toUpperCase());
}

// Filter and transform the array of books
const filteredBooks = books
    .filter(book => book.year >= 2010)
    .map(book => ({
        title: book.title,
        author: capitalizeAuthorName(book.author),
        year: book.year
    }));

// Display the original and filtered books
console.log('Original Books:', books);
console.log('Filtered Books (Published in 2010 or later, Author Names Capitalized):', filteredBooks);
