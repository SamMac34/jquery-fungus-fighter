$(document).ready(onReady);
console.log('JS loaded!')
// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let enemyHP = 100;
let playerAP = 100;

// **Handle click events:** 

// When you click an attack button:

// - Update _state_ variable(s) to make the Freaky Fungus lose hit points (HP),
//   and to reduce your attack points (AP). 
// - See [Attacks](#attacks) below, for the AP and HP values of each attack
// - State may be held in one our more variables of your choosing
// - HP and AP values may not be negative (set to zero, if they would otherwise
//   be negative)

function onReady() {
    console.log('JQuery is ready!');
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
    
    $('.attacks').on('click', '.arcane-scepter', arcaneSceptreAttack);
    // $('.attacks').on('click', '.entangle', entangleAttack);
    // $('.attacks').on('click', '.arcane-scepter', dragonBladeAttack);
    // $('.attacks').on('click', '.arcane-scepter', starFireAttack);


}

/* <button class="attack-btn arcane-scepter"></button>
<button class="attack-btn entangle"></button>
<button class="attack-btn dragon-blade"></button>
<button class="attack-btn star-fire"></button> */

function arcaneSceptreAttack(){
console.log('in arcane sceptre attack:');

if(playerAP >= 12){
    playerAP -= 12
} else {
    playerAP = 0
}

if(enemyHP >= 14){
    enemyHP -= 14;
} else {
    enemyHP = 0;
}
console.log('playerAP is:', playerAP);
console.log('enemyHP is:', enemyHP);

renderAPHP();
}


// - Update the text above the enemy fungus (eg, "100 HP")
// - If the Freaky Fungus runs out of HP, the monster is dead and you win! Replace the `walk` class 
// with a `dead` class on the freaky-fungus element, to make them fall over and die.

// - If you run out of AP, the monster wins and humanity is doomed 😢 Replace the `walk` class with a 
// `jump` class on the freaky-fungus element, to make them jump for the glory of the fungal race.

//   - You may no longer attack, if AP is `0`. Give all of the attack buttons a [`disabled`]
//   (https://www.w3schools.com/tags/att_button_disabled.asp) attribute, so they may no longer be used. 

function renderAPHP(){
// console.log('in renderAPHP');
    if(playerAP >= 12){
        $('.ap-text').text(playerAP);
    }
    else if(playerAP == 0){
        // console.log('In else if of renderAPHP. playerAP is:', playerAP);
        $('.ap-text').text(playerAP);
        $('.attack-btn').attr('disabled', true);
    } else {
        // console.log('in else of renderAPHP, playerAP is:', playerAP)
        $('.ap-text').text(playerAP);
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('jump');
        // Verified class change in element console
    }
    
    if(enemyHP >= 1){
        $('.hp-text').text(enemyHP);
    } else {
        $('.hp-text').text(enemyHP);
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('dead');
    }
}
