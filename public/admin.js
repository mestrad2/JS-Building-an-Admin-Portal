
// Your Code Here
async function main() {
    let response = await fetch('http://localhost:3001/listBooks');
    let books = await response.json();
    books.forEach(loadBook);
}

function loadBook(book) {
    let bookCollection = document.querySelector('#root');
    
    let listItem = document.createElement('li');
    listItem.textContent = book.title;

    let amountInput = document.createElement('input');
    amountInput.value = book.quantity;

    let submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';

    submitButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: amountInput.value
            })
        })
    })

    listItem.append(amountInput, submitButton);
    bookCollection.append(listItem);
}

main();