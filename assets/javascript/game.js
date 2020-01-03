function Character(name, image, health, attackPower, counterAttackPower) {
  this.name = name;
  this.image = image;
  this.health = health;
  this.attackPower = attackPower;
  this.counterAttackPower = counterAttackPower;
}

characters = [];
let selectedCharacterIndex;

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
    console.log("INDEX: ", index);
    let name = "<p class='center-align'>" + character.name + "</p>";
    let img = `<img src="` + character.image + `" alt="" class="charImg">`;
    let health = "<p class='center-align'>" + character.health + "</p>";
    $("#characterSelect").append(
      `<div class="col s3"><div class="card">
  <div class="card-content charCard" id="char` +
        index +
        `">` +
        name +
        img +
        health +
        `</div></div></div>`
    );
    index++;
  });

  listenForCharacterSelection();
}

function listenForCharacterSelection() {
  $(".charCard").on("click", function() {
    if (!selectedCharacterIndex) {
      selectedCharacterIndex = this.id.substring(4);

      let name =
        "<p class='center-align'>" +
        characters[this.id.substring(4)].name +
        "</p>";
      let img =
        `<img src="` +
        characters[this.id.substring(4)].image +
        `" alt="" class="charImg">`;
      let health =
        "<p class='center-align'>" +
        characters[this.id.substring(4)].health +
        "</p>";
      $("#characterSelect").replaceWith(
        `<div class="col s4"><div class="card">
        <div class="card-content charCard" id="char` +
          this.id.substring(4) +
          `">` +
          name +
          img +
          health +
          `</div></div></div>`
      );

      let index = 0;
      characters.forEach(char => {
        if (char.name != characters[selectedCharacterIndex].name ) {
          console.log("look here: ", char.name, index)
          let name = "<p class='center-align'>" + char.name + "</p>";
    let img = `<img src="` + char.image + `" alt="" class="charImg">`;
    let health = "<p class='center-align'>" + char.health + "</p>";
    $("#enemies").append(
      `<div class="col s4"><div class="card">
  <div class="card-content enemyCard" id="char` +
        index +
        `">` +
        name +
        img +
        health +
        `</div></div></div>`
    );
        }
        index++;
      });
      listenForCharacterSelection()
    }
    else {
      console.log("Char selected!")
    }
  });
}

addCharacterSelector(characters);
