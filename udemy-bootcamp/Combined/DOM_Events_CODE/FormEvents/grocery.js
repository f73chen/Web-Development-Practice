// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const shoppingList = document.querySelector('ul')
form.addEventListener('submit', function(e) {
    e.preventDefault()
    const product = form.elements.product;
    const amount = form.elements.qty;
    const newItem = document.createElement('li');
    newItem.innerText = `${product.value} ${amount.value}`;
    shoppingList.appendChild(newItem);
    product.value = '';
    amount.value = '';
})