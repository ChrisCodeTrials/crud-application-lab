# crud-application-lab
---
__Welcome New Employee to the Sandwich Shop! :)__

-As an employee at the sandwich shop, you will be able to do multiple different actions to keep the register flow up to speed. Below are 7 different commands in our application as well as examples of how to use them : 

**All of these features require "npm run" to be entered before the command**
- __create__ - The create feature lets us enter a sandwich name and reference the menu if it exists. If it is not there, a new one will be created as well as its price. //__example__ :"npm run create 'sandwich name'"
- __showCart__ - The showCart feature lets us see the current sandwiches the customer has in their shopping cart. 
//__example__: "npm run showCart"

- __update__ - The update feature lets us change the name of sandwiches that are currently on the menu as we rotate our selections. You can enter update, the sandwiches name (that you want to switch) and follow it with the name of the new sandwich.
//__example__ :"npm run update 'Chicken Cutlet' 'Chicken Gyro'"

- __cancelCart__ - The cancelCart feature lets us empty our cart once we are finished working with the current customer.
//__example__: "npm run cancelCart"

- __total__ - The total feature lets us see the total balance for the current order.
//__example__: "npm run total"

- __remove__ - The remove feature allows us to remove any unwanted sandwiches from our current order. It takes the sandwiches name and removes the first occurrence of the sandwich from the order.
//__example__: "npm run remove 'Chicken Cutlet'"

- __singleItem__- The singleItem feature allows us to see what the particular item costs and its name. This feature requires the item to be in the shopping-cart as the unique "sku" is required to track the sandwich.
//__example__: "npm run singleItem 'unique-sku'"

- __vegan__ - The vegan feature lets us see the which sandwich options we offer that are vegan.
//__example__: "npm run vegan"
---