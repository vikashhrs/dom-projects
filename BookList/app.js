//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI() {
    this.title = document.getElementById('title');
    this.author = document.getElementById('author');
    this.isbn = document.getElementById('isbn');
    this.list = document.getElementById('book-list');
    this.container = document.querySelector('.container');
    this.form = document.getElementById('book-form');
}

UI.prototype.addBookToList = function(book) {
    const row = document.createElement('tr');
    row.innerHTML = `
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td><a href="#" class="delete">X</a></td>
                    `
    this.list.appendChild(row);
}

UI.prototype.clearFields = function() {
    this.title.value = '';
    this.author.value = '';
    this.isbn.value = '';
}

UI.prototype.showAlert = function(message, className) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${className}`;
    alertDiv.appendChild(document.createTextNode(message));
    this.container.insertBefore(alertDiv, this.form);
    setTimeout(() => {
        alertDiv.remove();
    }, 2000);
}

UI.prototype.removeBook = function(target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
        if (confirm('Are you Sure?')) {
            this.showAlert('Successfully deleted book!', 'success');
        }
    }
}

document.getElementById('book-form').addEventListener('submit', function(e) {
    const ui = new UI();
    const title = ui.title.value,
        author = ui.author.value,
        isbn = ui.isbn.value;

    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill all fields!', 'error');
    } else {
        const book = new Book(title, author, isbn);
        ui.addBookToList(book);
        ui.showAlert('Successfully added book!', 'success');
        ui.clearFields();
    }
    e.preventDefault();
})

document.getElementById('book-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.removeBook(e.target);
    e.preventDefault();
})