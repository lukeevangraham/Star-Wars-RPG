function Character(name, image, health, attackPower, counterAttackPower) {
  this.name = name;
  this.image = image;
  this.health = health;
  this.attackPower = attackPower;
  this.counterAttackPower = counterAttackPower;
}

characters = [];

characters.push(new Character("Yoda", "./assets/images/yoda.jpg", 100, 8, 15));
characters.push(
  new Character("Darth Sidious", "./assets/images/sidious.jpg", 100, 8, 15)
);
characters.push(new Character("Leia", "./assets/images/leia.jpg", 100, 8, 15));
characters.push(
  new Character("Darth Maul", "./assets/images/maul.jpg", 100, 8, 15)
);

function addCharacterSelector(char) {
  console.log("CHAR: ", char);

  let index = 0;
  char.forEach(character => {
    console.log("INDEX: ", index)
    let name = "<p class='center-align'>" + character.name + "</p>";
    let img = `<img src="` + character.image + `" alt="" class="charImg">`;
    let health = "<p class='center-align'>" + character.health + "</p>";
    $("#characterSelect").append(
      `<div class="col s3"><div class="card">
  <div class="card-content charCard" id="char`+ index +`">` +
        name +
        img +
        health +
        `</div></div></div>`
    );
    index++
  });
}

addCharacterSelector(characters);
