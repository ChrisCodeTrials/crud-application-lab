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
    for (createdSandwich of shoppingCart){ //if the sandwich was just added to the cart it will keep the same values as the newly created sandwich
        if (createdSandwich.name === sandwichType){
            shoppingCart.push(createdSandwich)
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

function update(sandwiches, sandwichId, updatedSandwich){
    const index = sandwiches.findIndex((sandwich) => sandwich.name === sandwichId)
    if (index > -1){
        sandwiches[index].name = updatedSandwich
        sandwiches[index].priceInCents = sandwiches[updatedSandwich] || faker.number.int({ min: 1000, max: 1500})
        sandwiches[index].inStock = true
        sandwiches[index].isVegan = faker.datatype.boolean()
        inform('Sandwich successfully updated')
        return sandwiches
    } else {
        inform('Sandwich was not found; no action taken')
        return sandwiches
    }
} 

function vegan (sandwiches){
    return veganOptions = sandwiches.filter((sandwich) => sandwich.isVegan === true)
}

function valueMenu (sandwiches){
    return lessThan15 = sandwiches.filter((sandwich)=> sandwich.priceInCents >= 1300)
}

module.exports = {
    create,
    showCart,
    singleItem,
    cancelCart,
    update,
    remove,
    total,
    vegan,
    valueMenu
}

