const sandwiches = require('../data/sandwiches.json');
const { faker } = require('@faker-js/faker')
const inform = console.log

function create(shoppingCart, sandwichType) {
    for (sandwich of sandwiches){
       if (sandwich.name === sandwichType){
           sandwich.sku === faker.string.nanoid(6)
           shoppingCart.push(sandwich)
           return shoppingCart
        }
    }
    const newSandwich = {
        name: sandwichType,
        priceInCents: faker.number.int({ min: 1000, max: 1500}),
        inStock: faker.datatype.boolean(),
        isVegan: faker.datatype.boolean(),
        sku: faker.string.nanoid(6),
    }
    shoppingCart.push(newSandwich);
    return shoppingCart;
};

function cancelCart(shoppingCart) {
  if (shoppingCart.length > 0){
    shoppingCart.length = 0
  }
  return shoppingCart
}

function showCart(shoppingCart) {
    return shoppingCart.map((sandwichType) => sandwichType.sku + ' ' + sandwichType.name + ' ' + "$"+  ((sandwichType.price)/100).toFixed(2)).join('\n');
}

function remove (shoppingCart, sandwichId){
  const index = shoppingCart.findIndex((sandwiches) =>  sandwiches.name === sandwichId)
  if (index > -1) {
    shoppingCart.splice(index, 1)
    inform('Sandwich successfully removed from shopping cart')
    return shoppingCart
  } else {
    inform('Sandwich not found. No action taken')
    return shoppingCart
  }
}

function total (shoppingCart){
    let total = shoppingCart.reduce((acc, current) => acc + current.priceInCents, 0)
    return "$" + ((total)/100).toFixed(2)
}

function singleItem (shoppingCart, sandwichId) {
    const sandwich = shoppingCart.find((sandwich) => sandwich.sku === sandwichId);
    return sandwich.sku + ' ' + sandwich.name + ' ' + "$"+(sandwich.priceInCents)/100;
}

function update(shoppingCart, sandwichId, updatedSandwich){
    const index = shoppingCart.findIndex((sandwich) => sandwich.sku === sandwichId)
    if (index > -1){
        shoppingCart[index].name = updatedSandwich
        shoppingCart[index].price = sandwiches[updatedSandwich] || faker.commerce.price({ min: 10, max: 15, dec: 2, symbol: '$' }),
        shoppingCart[index].inStock = faker.datatype.boolean()
        shoppingCart[index].isVegan = faker.datatype.boolean()
        shoppingCart[index].sku = sandwichId
        inform('Sandwich successfully updated')
        return shoppingCart
    } else {
        inform('Sandwich was not found; no action taken')
        return shoppingCart
    }
} 

module.exports = {
    create,
    showCart,
    singleItem,
    cancelCart,
    update,
    remove,
    total,
    
}

