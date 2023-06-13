$(document).ready(onReady);
console.log('JS loaded!')
// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let fungusHP = 100;
let playerAP = 100;


function onReady() {
    console.log('JQuery is ready!');
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

    // Atk button listeners
    $('.attacks').on('click', '.arcane-scepter', arcaneSceptreAttack);
    $('.attacks').on('click', '.entangle', entangleAttack);
    $('.attacks').on('click', '.arcane-scepter', dragonBladeAttack);
    $('.attacks').on('click', '.arcane-scepter', starFireAttack);


}


function arcaneSceptreAttack(){
console.log('in arcane sceptre attack:');

if(playerAP >= 12){
    playerAP -= 12
} else {
    playerAP = 0
}

if(fungusHP >= 14){
    fungusHP -= 14;
} else {
    fungusHP = 0;
}
console.log('playerAP is:', playerAP);
console.log('fungusHP is:', fungusHP);

renderAPHP();
}

function entangleAttack(){
    console.log('in entangle attack:');
    
    if(playerAP >= 23){
        playerAP -= 23
    } else {
        playerAP = 0
    }
    
    if(fungusHP >= 9){
        fungusHP -= 9;
    } else {
        fungusHP = 0;
    }
    console.log('playerAP is:', playerAP);
    console.log('fungusHP is:', fungusHP);
    
    renderAPHP();
}

function dragonBladeAttack(){
    console.log('in dragon blade attack:');
    
    if(playerAP >= 38){
        playerAP -= 38
    } else {
        playerAP = 0
    }
    
    if(fungusHP >= 47){
        fungusHP -= 47;
    } else {
        fungusHP = 0;
    }
    console.log('playerAP is:', playerAP);
    console.log('fungusHP is:', fungusHP);
    
    renderAPHP();
}

function starFireAttack(){
    console.log('in star fire attack:');
    
    if(playerAP >= 33){
        playerAP -= 33
    } else {
        playerAP = 0
    }
    
    if(fungusHP >= 25){
        fungusHP -= 25;
    } else {
        fungusHP = 0;
    }
    console.log('playerAP is:', playerAP);
    console.log('fungusHP is:', fungusHP);
    
    renderAPHP();
}

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
    
    if(fungusHP >= 1){
        $('.hp-text').text(fungusHP);
    } else {
        $('.hp-text').text(fungusHP);
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('dead');
    }
}
