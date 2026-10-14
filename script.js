const prices = {
  size: {
    small: 4.5,
    medium: 5.5,
    large: 6.5,
  },
  tea: {
    "black-tea": 0,
    "green-tea": 0,
    "oolong-tea": 0,
    "alishan-tea": 0.5
  },
  flavour: {
    "whole-milk": 0,
    none: 0,
    "oat-milk": 0.5,
    "soy-milk": 0.5,
    lychee: 0.5,
    peach: 0.5,
    mango: 0.5,
    passionfruit: 0.5
  },
  topping: {
    "lychee-jelly": 0.75,
    "boba": 0.75,
    "aloe-vera": 0.75
  }

};

function updateOrder() {
    // Dropdowns: read the select's value directly
    const tea = document.querySelector("#tea").value;
    const flavour = document.querySelector("#flavour").value;

    // Radio buttons: find the one in the group that's checked
    const size = document.querySelector('input[name="size"]:checked').value;
    const sugar = document.querySelector('input[name="sugar"]:checked').value;

    // Checkboxes: there could be several, so use querySelectorAll
    const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(checkbox => checkbox.value);

    console.log(tea, flavour, size, sugar, toppings);

    const sizePrice = prices.size[size];
    const teaPrice = prices.tea[tea];
    const flavourPrice = prices.flavour[flavour];
    // Instead of looking up the whole array at once, it goes through the toppings one at a time, looks up each price, and adds them together.
    const toppingsPrice = toppings.reduce((sum, topping) => sum + prices.topping[topping], 0);

    const total = sizePrice + teaPrice + flavourPrice + toppingsPrice;

    console.log(total);
    
}

updateOrder()