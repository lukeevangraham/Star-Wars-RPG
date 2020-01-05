function Character(
  name,
  image,
  health,
  attackPower,
  initialAttackPower,
  counterAttackPower
) {
  this.name = name;
  this.image = image;
  this.health = health;
  this.attackPower = attackPower;
  this.initialAttackPower = initialAttackPower;
  this.counterAttackPower = counterAttackPower;
}

characters = [];
let selectedCharacterIndex;
let defenderIndex;
let index;

function initAllCharacters() {
  characters.push(
    new Character("Yoda", "./assets/images/yoda.jpg", 150, 8, 8, 15)
  );
  characters.push(
    new Character("Darth Sidious", "./assets/images/sidious.jpg", 180, 8, 8, 15)
  );
  characters.push(
    new Character("Leia", "./assets/images/leia.jpg", 120, 8, 8, 15)
  );
  characters.push(
    new Character("Darth Maul", "./assets/images/maul.jpg", 100, 8, 8, 15)
  );
}

function renderYourCharacterBox(character) {
  // console.log(character)
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
    $("#characterSelect").html(
      `<div class="col s3"><div class="card">
    <div class="card-content charCard" id="char` +
        index +
        `">` +
        name +
        img +
        health +
        `</div></div></div>`
    );
    if (characters[selectedCharacterIndex].health <= 0) {
      $("#attackMessage").html(
        `<p>You have been defeated...GAME OVER!!!</p><a class="waves-effect waves-light red darken-1 btn-small " id="restartBtn">Restart</a>`
      );
      resetButtonListen();
    }
  }
}

function renderEnemiesBox(char) {
  if (char.health >= 0) {
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
}

function renderDefenderBox(char) {
  $("#attackMessage").empty();
  let name = "<p class='center-align'>" + char.name + "</p>";
  let img = `<img src="` + char.image + `" alt="" class="charImg">`;
  let health = "<p class='center-align'>" + char.health + "</p>";
  $("#defender").html(
    `<div class="col s10"><div class="card">
        <div class="card-content charCard"` +
      defenderIndex +
      `">` +
      name +
      img +
      health +
      `</div></div></div>`
  );
}

function renderMultipleYourCharOptions(char) {
  if (!selectedCharacterIndex) {
    $("#characterSelect").empty();
    index = 0;
    char.forEach(character => {
      renderYourCharacterBox(character);
      index++;
    });
  }
  listenForInput();
}

function listenForInput() {
  $(".charCard").on("click", function() {
    // Setting up inital character selection
    if (!selectedCharacterIndex) {
      selectedCharacterIndex = this.id.substring(4);

      // REPLACE 'YOUR CHARACTER' BOX WITH ONLY SELECTED CHARACTER
      renderYourCharacterBox(characters[selectedCharacterIndex]);

      // FILL 'ENEMIES' BOX WITH REMAINING CHARACTERS
      index = 0;
      characters.forEach(char => {
        if (char.name != characters[selectedCharacterIndex].name) {
          renderEnemiesBox(char);
        }
        index++;
      });
      listenForInput();
    }

    // Executing defender selection
    else {
      if (!defenderIndex && characters[selectedCharacterIndex].health > 0) {
        defenderIndex = this.id.substring(4);

        renderDefenderBox(characters[defenderIndex]);
        index = 0;
        $("#enemies").empty();
        characters.forEach(char => {
          let enemyIndex = 0;
          if (
            char.name != characters[selectedCharacterIndex].name &&
            char.name != characters[defenderIndex].name &&
            enemyIndex === 0
          ) {
            renderEnemiesBox(char);
          }
          index++;
          enemyIndex++;
        });

        listenForInput();
      }
    }
  });
}

initAllCharacters();
renderMultipleYourCharOptions(characters);

$("#attackBtn").on("click", function() {
  if (selectedCharacterIndex && defenderIndex) {
    if (characters[selectedCharacterIndex].health <= 0) {
      $("#attackMessage").html(
        `<p>You have been defeated...GAME OVER!!!</p><a class="waves-effect waves-light red darken-1 btn-small " id="restartBtn">Restart</a>`
      );
      resetButtonListen();
    }
    if (characters[selectedCharacterIndex].health > 0) {
      // SELECTED CHARACTER DAMAGES THE DEFENDER
      characters[defenderIndex].health -=
        characters[selectedCharacterIndex].attackPower;

      // DEFENDER INSTANTLY COUNTER ATTACKS
      characters[selectedCharacterIndex].health -=
        characters[defenderIndex].counterAttackPower;

      if (characters[defenderIndex].health <= 0) {
        $("#defender").empty();
        $("#attackMessage").html(
          `<p>You have defeated ` +
            characters[defenderIndex].name +
            `, you can choose to fight another enemy.</p>`
        );
        defenderIndex = null;
        renderYourCharacterBox(characters[selectedCharacterIndex]);
      } else if (characters[selectedCharacterIndex].health >= 0) {
        // RE-RENDER CHARACTERS
        index = selectedCharacterIndex;
        renderYourCharacterBox(characters[selectedCharacterIndex]);
        renderDefenderBox(characters[defenderIndex]);

        // Message result
        if (characters[selectedCharacterIndex].health > 0) {
          $("#attackMessage").html(
            `<p>You attacked ` +
              characters[defenderIndex].name +
              ` for ` +
              characters[selectedCharacterIndex].attackPower +
              ` damage. <br>` +
              characters[defenderIndex].name +
              ` attacked you back for ` +
              characters[defenderIndex].counterAttackPower +
              ` damage.</p>`
          );
        } else {
          renderYourCharacterBox(characters[selectedCharacterIndex]);
        }
      }
      // INCREATE SELECTED CHARACTER'S ATTACK POWER
      characters[selectedCharacterIndex].attackPower +=
        characters[selectedCharacterIndex].initialAttackPower;
    }
  } else if (!defenderIndex && characters[selectedCharacterIndex].health > 0) {
    alert("Please select an enemy to attack!");
  } else if (characters[selectedCharacterIndex].health <= 0) {
    renderYourCharacterBox(characters[selectedCharacterIndex]);
  } else {
    alert("Please select a character then choose an opponent!");
  }
});

function resetButtonListen() {
  $("#restartBtn").on("click", function() {
    characters = [];
    $("#enemies").empty();
    $("#attackMessage").empty();
    selectedCharacterIndex = null;
    initAllCharacters();
    renderMultipleYourCharOptions(characters);
  });
}
