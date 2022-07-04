console.log("Main js >>>>>>>>> OK")
const rpgZone = document.querySelector(".rpg-zone")
let player;
console.log(data, 'data')

class Player {
    constructor(name, life, damage) {
        this.playerName = name;
        this.playerLife = 100;
        this.playerDamage = 10;
        this.playerLevel = 1;
        this.playerCritChance = 0.1;

    } addRole(role) {
        switch (role) {
            case "warrior":
                this.playerDamage = 20;
                break;
            case "mage":
                this.playerLife = 120;
                break;
            case "rogue":
                this.playerCritChance = 1.6;
                break;
        }
    }
}

function rollDice(){
let dice = Math.floor(Math.random() * 20) + 1;
dice = dice + (player.playerCritChance * 2)

if (dice <= 1.2) {
    player.playerLife = player.playerLife - 100;
}
if (dice > 16){
    return true;
} else {
    return false;
}
}


function handleOption(id, optionId){
    const result = rollDice();
    const situationDiv = document.querySelector(".situation");
    situationDiv.remove()
    const resultDiv = document.createElement("div")
    resultDiv.className = "result";
    const option = data.situations[id].options[optionId];
    
    if (result){
        player.playerLife += option.sucess.bonus;
        player.playerLevel++;
        resultDiv.innerHTML = `
        <div class="results">
        <p>${option.sucess.description}</p>
        <button onclick="generateSituation()">Continuar</button>

        </div>
    
        `;
    } else {
        player.playerLife -= option.fail.damage;
        player.playerLevel++;
        resultDiv.innerHTML = `
        <div class="results">
        <p>${option.fail.description}</p>
        <button onclick="generateSituation()">Continuar</button>

        </div>
    
        `
    }
    rpgZone.appendChild(resultDiv);

}

function resetHUD() {
    if (document.querySelector(".hud")) {
        document.querySelector(".hud").remove();
    }
    const hud = document.createElement("div");
    hud.className = "hud";
    hud.innerHTML = `
    <div class="hud-inner">
      <p class="hud-inner-left">
       Vida: ${player.playerLife}
      </p>
      <p class="hud-inner-center">
      Nome: ${player.playerName}
      </p>
      <p class="hud-inner-right">
       Nível: ${player.playerLevel}
      </p>
    
    </div>
    `
    console.log(player);
    rpgZone.appendChild(hud);
}

function generateSituation() {
    resetHUD();
    if (player.playerLife <= 0){
    alert ("Você morreu!");
    return window.location.href = "./index.html"
    }
    document.querySelector(".result")?.remove();
    const situation = data.situations[Math.floor(Math.random() * data.situations.length)];
    const situationDiv = document.createElement("div")
    situationDiv.className = "situation"
    situationDiv.innerHTML = `
    <div class="situation-inner">
       <p>
       ${situation.description}
        </p>
         <div class="situation-inner-options">
           <button onclick="handleOption(${situation.id}, 0)">${situation.options[0].description}</button>
           <button onclick="handleOption(${situation.id}, 1)">${situation.options[1].description}</button>
         </div>
    </div>
    `
    rpgZone.appendChild(situationDiv);
    console.log(situation)

}

function chooseRole(role) {
    document.querySelector('.class-choice').remove();
    player.addRole(role);
    console.log(player);
    resetHUD();
    generateSituation();

}

function showClassChoice(nome) {
    player = new Player(nome);
    console.log(player);
    document.querySelector(".titleArea").remove();
    document.querySelector(".inputArea").remove();
    const ClassChoice = document.createElement("div")
    ClassChoice.className = `class-choice`;
    ClassChoice.innerHTML = `
    <div class=playerOptions>
      <p>Ok ${nome}! Agora escolha a sua classe</p>
    <buttom onclick="chooseRole('warrior')">Guerreiros</buttom>
    <buttom onclick="chooseRole('mage')">Mago</buttom>
    <buttom onclick="chooseRole('rogue')">Ladino</buttom>

    </div>
    `
    rpgZone.appendChild(ClassChoice)


}


//step 0
function handleNameSubmit(e) {
    console.log("Handle Submit Called")
    const nameOfPlayer = document.getElementById("input-0").value;

    if (nameOfPlayer.length > 0) {
        showClassChoice(nameOfPlayer);

    }
}