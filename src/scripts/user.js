// 📁 user.js
export default class User {
  // just add "default"
  constructor(name) {
    this.name = name;
  }

  moto() {
    return "Boooya! I'm " + this.name;
  }

  add(num1, num2) {
    return num1 + num2;
  }

  addEvent(element, evnt, funct){
      if (element.attachEvent)
          return element.attachEvent('on'+evnt, funct);
      else
          return element.addEventListener(evnt, funct, false);
  }

}
