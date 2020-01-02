let char1 = {
    name: "Yoda",
    image: "./assets/images/yoda.jpeg",
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


// $("#characterSelect").prepend("Some appended text.")

addCharacterSelector(char1)