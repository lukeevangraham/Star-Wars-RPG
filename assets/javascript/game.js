let char1 = {
  name: "Yoda",
  image: "./assets/images/yoda.jpg",
  health: 100,
  attackPower: 8,
  counterAttackPower: 15
};

function addCharacterSelector(char) {
  console.log("CHAR: ", char);
  let name = "<p class='center-align'>" + char.name + "</p>";
  let img = `<img src="` + char.image + `" alt="" class="charImg">`;
  let health = "<p class='center-align'>" + char.health + "</p>";
  $("#characterSelect").append(`<div class="col s3"><div class="card charCard">
  <div class="card-content charCard">` + name + img + health + `</div></div></div>`);
}

function Character(name, image, health, attackPower, counterAttackPower) {
  this.name = name;
  this.image = image;
  this.health = health;
  this.attackPower = attackPower;
  this.counterAttackPower = counterAttackPower;
}

let yoda = new Character("Yoda", "./assets/images/yoda.jpg", 100, 8, 15);
let sidious = new Character(
  "Darth Sidious",
  "./assets/images/sidious.jpg",
  100,
  8,
  15
);
let leia = new Character("Leia", "./assets/images/leia.jpg", 100, 8, 15);
let maul = new Character("Darth Maul", "./assets/images/maul.jpg", 100, 8, 15);

// $("#characterSelect").prepend("Some appended text.")

addCharacterSelector(yoda);
addCharacterSelector(sidious);
addCharacterSelector(leia);
addCharacterSelector(maul);
