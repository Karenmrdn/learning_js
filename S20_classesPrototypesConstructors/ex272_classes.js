"use strict";

/* !!! We cannot use constructor in child class without
call of the constructor of parent class */

/* EXAMPLE 1  */
// class ComputerMouse {
//   constructor(props) {
//     this.type = props.type ?? "USB";
//     this.color = props.color;
//     this.interface = props.interface ?? "Default interface";
//   }

//   showMouseInfo() {
//     console.log(`Type of the mouse is ${this.type} and color is ${this.color}`);
//   }

//   changeColor(color) {
//     this.color = color;
//   }
// }

// const propsForWirelessMouse = {
//   type: "Wireless",
//   color: "white",
//   interface: "Bluetooth",
// };
// const wirelessMouse = new ComputerMouse(propsForWirelessMouse);
// console.log(wirelessMouse);

// const propsForGenericMouse = {
//   color: "red",
// };
// const genericMouse = new ComputerMouse(propsForGenericMouse);
// console.log(genericMouse);

// genericMouse.showMouseInfo();
// genericMouse.changeColor("black");
// genericMouse.showMouseInfo();

/* EXAMPLE 2. Class extension without constructor */
// class ComputerAccessories {
//   constructor(props) {
//     this.compatibility = props.compatibility ?? ["Windows", "Mac"];
//   }
// }

// class ComputerMouse extends ComputerAccessories {} // constructor of the ComputerAccessories will be called automatically from parent class if we don't declare constructor in our class

// // /* Default behaviour if constructor is absent */
// // class ComputerMouse extends ComputerAccessories {
// //   constructor(...allProps) {
// //     super(...allProps);
// //   }
// // }

// const myMouse = new ComputerMouse({ compatibility: ["Mac"] });

// console.log(myMouse);

/* EXAMPLE 3. Class extension */
/* !!! We cannot use constructor in child class without
call of the constructor of parent class */
// class ComputerAccessories {
//   constructor(props) {
//     this.compatibility = props.compatibility ?? ["Windows", "Mac"];
//   }

//   showCompatibilityInfo() {
//     this.compatibility.forEach((el) =>
//       console.log(`Accessory is compatible with ${el}`)
//     );
//   }
// }

// class ComputerMouse extends ComputerAccessories {
//   constructor(props) {
//     super(props); // We cannot skip a call of parent constructor
//     this.type = props.type;
//   }

//   showMouseInfo() {
//     console.log(`Type of the mouse is ${this.type}`);
//   }
// }

// const myMouse = new ComputerMouse({ compatibility: ["Mac"], type: "Optical" });

// console.log(myMouse);

// myMouse.showCompatibilityInfo();
// myMouse.showMouseInfo();

/* EXAMPLE 4. Static methods */
class ComputerMouse {
  constructor(props) {
    this.type = props.type;
  }

  static ownClassMethod() {
    console.log("This class sets props for the Mice");
  }

  showMouseInfo() {
    console.log(`Type of the mouse is ${this.type}`);
  }
}

const myMouse = new ComputerMouse({ type: "Gaming" });

myMouse.showMouseInfo();

// myMouse.ownClassMethod(); // ERROR. ownClassMethod is not a function

ComputerMouse.ownClassMethod(); // Static methods can be called directly from class name (not the instance of a class)

console.log(myMouse); // We won't see static method here

console.dir(ComputerMouse); // We will see the static method in the ComputerMouse object