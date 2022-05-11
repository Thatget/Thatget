var cartContents = fetch(window.Shopify.routes.root + 'cart.js')
    .then(response => response.json())
    .then(data => { return data });
console.log(cartContents.data)
alert(`{{ shop.id }}`)
alert('{{product.id}}')