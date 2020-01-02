let char1 = {
    name: "Yoda",
    image: "./assets/images/yoda.jpg",
    health: 100,
    attackPower: 8,
    counterAttackPower: 15
}

function addCharacterSelector(char) {
    console.log("CHAR: ", char)
    let name = "<p>" + char.name + "</p>";
    let img = `<img src="` + char.image + `" alt="">`;
    let health = "<p>" + char.health + "</p>";
    $("#characterSelect").prepend(name, img, health)
}

function Character(name, image, health, attackPower, counterAttackPower) {
    this.name = name;
    this.image = image;
    this.health = health;
    this.attackPower = attackPower;
    this.counterAttackPower = counterAttackPower;
}

let yoda = new Character("Yoda", "./assets/images/yoda.jpg", 100, 8, 15)
let sidious = new Character("Darth Sidious", "./assets/images/sidious.jpg", 100, 8, 15)
let leia = new Character("Leia", "./assets/images/leia.jpg", 100, 8, 15)
let maul = new Character("Darth Maul", "./assets/images/maul.jpg", 100, 8, 15)


// $("#characterSelect").prepend("Some appended text.")

addCharacterSelector(yoda)
addCharacterSelector(sidious)
addCharacterSelector(leia)
addCharacterSelector(maul)