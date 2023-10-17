const { readJSONFile, writeJSONFile } = require('./src/helpers')
const { create, showCart, singleItem, cancelCart, remove, update,  total } = require('./src/sandwichController')
const shoppingCart = readJSONFile('./data', 'shoppingCart.json')
const sandwiches = readJSONFile('./data', 'sandwiches.json')

const inform = console.log;

function run() {
  let writeToFile = false
  let writeToFileX = false
  let updatedSandwiches = []

  const action = process.argv[2];
  const sandwich = process.argv[3];
  const newName = process.argv[4]
  
  switch (action) {
    case 'showCart':
        const viewCart = showCart(shoppingCart)
        inform(viewCart);
      break;
    case 'create':
        updatedSandwiches = create(shoppingCart, sandwich)
        writeToFile = true
        break;
    case 'singleItem':
        const viewSandwich = singleItem(shoppingCart, sandwich)
        inform(viewSandwich);
        break;
    case 'update':
        updatedSandwiches = update(sandwiches, sandwich, newName)
        writeToFileX = true
        break;
    case 'cancelCart':
        updatedSandwiches = cancelCart(shoppingCart)
        writeToFile = true
        break;
    case 'total':
        inform('Your total purchase is:', total(shoppingCart));
        break;
    case 'remove':
        updatedSandwiches = remove(shoppingCart, sandwich)
        writeToFile = true
        break;
    default:
      inform('There was an error.');
    }
  if (writeToFile){
    writeJSONFile('./data', 'shoppingCart.json', updatedSandwiches)
  }
  if (writeToFileX){ 
    writeJSONFile('./data', 'sandwiches.json', updatedSandwiches)
  }
}

run();