/**
 * CHALLENGE 7-2
 *
 * Fix all mistakes in the code below
 */

function Product(props) {
  this.price = props.price;
}

Product.prototype.priceInfo = function () {
  console.log(`Price of the product is ${this.price}`);
};

function ElectricDevice(props) {
  Product.call(this, props);
  this.energyEfficiencyClass = props.energyEfficiencyClass;
}

ElectricDevice.prototype = Object.create(Product.prototype);

ElectricDevice.prototype.energyInfo = function () {
  console.log(`Energy Efficiency Class is ${this.energyEfficiencyClass}`);
};

ElectricDevice.prototype.constructor = ElectricDevice;

function TV(props) {
  ElectricDevice.call(this, props);
  this.model = props.model;
  this.diagonal = props.diagonal;
}

TV.prototype = Object.create(ElectricDevice.prototype);

TV.prototype.constructor = TV;

const propsForMyTv = {
  model: "A1620",
  price: 1200,
  energyEfficiencyClass: "A+",
  diagonal: 42,
};

const myTV = new TV(propsForMyTv);

/**
 * VERIFICATION
 */
console.log(myTV);
/* {
  model: "A1620",
  price: 1200,
  energyEfficiencyClass: "A+",
  diagonal: 42,
  __proto__: ...
} */

myTV.energyInfo(); // "Energy Efficiency Class is A+"

myTV.priceInfo(); // Price of the product is 1200

console.log(myTV instanceof TV); // true
console.log(myTV instanceof ElectricDevice); // true
console.log(myTV instanceof Product); // true
console.log(myTV instanceof Object); // true
