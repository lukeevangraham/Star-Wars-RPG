function Character(name, image, health, attackPower, counterAttackPower) {
  this.name = name;
  this.image = image;
  this.health = health;
  this.attackPower = attackPower;
  this.counterAttackPower = counterAttackPower;
}

characters = [];
let selectedCharacterIndex;
let defenderIndex;
let index;

characters.push(new Character("Yoda", "./assets/images/yoda.jpg", 100, 8, 15));
characters.push(
  new Character("Darth Sidious", "./assets/images/sidious.jpg", 100, 8, 15)
);
characters.push(new Character("Leia", "./assets/images/leia.jpg", 100, 8, 15));
characters.push(
  new Character("Darth Maul", "./assets/images/maul.jpg", 100, 8, 15)
);

function renderYourCharacterBox(character) {
  let name = "<p class='center-align'>" + character.name + "</p>";
  let img = `<img src="` + character.image + `" alt="" class="charImg">`;
  let health = "<p class='center-align'>" + character.health + "</p>";
  if (!selectedCharacterIndex) {
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
  } else {
    $("#characterSelect").replaceWith(
      `<div class="col s3"><div class="card">
    <div class="card-content charCard" id="char` +
      index +
      `">` +
      name +
      img +
      health +
      `</div></div></div>`
    );
  }
}

function renderEnemiesBox(char) {
  console.log("Index: ", index, char.name)
  let name = "<p class='center-align'>" + char.name + "</p>";
  let img = `<img src="` + char.image + `" alt="" class="charImg">`;
  let health = "<p class='center-align'>" + char.health + "</p>";
    $("#enemies").append(
      `<div class="col s3"><div class="card">
<div class="card-content charCard" id="char` +
      index +
      `">` +
      name +
      img +
      health +
      `</div></div></div>`
    );
}

function renderDefenderBox(char) {
  let name =
    "<p class='center-align'>" +
    char.name +
    "</p>";
  let img =
    `<img src="` +
    char.image +
    `" alt="" class="charImg">`;
  let health =
    "<p class='center-align'>" +
    char.health +
    "</p>";
  $("#defender").replaceWith(
    `<div class="col s3"><div class="card">
        <div class="card-content charCard"` +
    defenderIndex +
    `">` +
    name +
    img +
    health +
    `</div></div></div>`
  );
}

function callForYourCharacterRender(char) {
  if (!selectedCharacterIndex) {
    index = 0;
    char.forEach(character => {
      renderYourCharacterBox(character);
      index++;
    });
  }
  listenForCharacterSelection();
}

function listenForCharacterSelection() {
  $(".charCard").on("click", function () {

    // Setting up inital character selection
    if (!selectedCharacterIndex) {
      selectedCharacterIndex = this.id.substring(4);

      // REPLACE 'YOUR CHARACTER' BOX WITH ONLY SELECTED CHARACTER
      renderYourCharacterBox(characters[selectedCharacterIndex])

      // FILL 'ENEMIES' BOX WITH REMAINING CHARACTERS
      index = 0;
      characters.forEach(char => {
        if (char.name != characters[selectedCharacterIndex].name) {
          renderEnemiesBox(char)
        }
        index++;
      });
      listenForCharacterSelection()
    }

    // Executing defender selection
    else {
      if (!defenderIndex) {
        defenderIndex = this.id.substring(4)

        renderDefenderBox(characters[defenderIndex])
        index = 0;
        $("#enemies").empty();
        characters.forEach(char => {
          let enemyIndex = 0
          if ((char.name != characters[selectedCharacterIndex].name) && (char.name != characters[defenderIndex].name) && (enemyIndex === 0 )) {
            renderEnemiesBox(char)
          }
          index++;
          enemyIndex++;
        });

      }
    }
  });
}

callForYourCharacterRender(characters);
