// Snake Water Gun


var mycount = 0;
var comcount = 0;

for (let i = 1; i < 3; i++) {
    let me = prompt("Enter Snake, Water or Gun");
    alert("You entered : " + me)
    let computer = Math.floor(Math.random() * 3)

    if (computer = 0) {
        alert("Computer entered  : Snake")
    }
    else if (computer = 1) {
        alert("Computer entered : Water")
    }
    else {
        alert("Computer entered : Gun")
    }


    if (me == "Snake" && computer == 0) {
        alert("Tie")
    }

    else if (me == "Snake" && computer == 1) {
        alert("You won!!")
        mycount++;
    }

    else if (me == "Snake" && computer == 2) {
        alert("Computer won!!")
        comcount++;
    }

    else if (me == "Water" && computer == 0) {
        alert("You won!!")
        mycount++
    }

    else if (me == "Water" && computer == 1) {
        alert("Tie")
    }

    else if (me == "Water" && computer == 2) {
        alert("Computer won!!")
        comcount++
    }


    else if (me == "Gun" && computer == 0) {
        alert("you won!!")
        mycount++
    }

    else if (me == "Gun" && computer == 1) {
        alert("computer won!!")
        comcount++
    }

    else if (me == "Gun" && computer == 2) {
        alert("Tie")
    }

}

if (mycount>comcount){
    alert("You won !! and you score is : " + mycount)
}
else if (mycount<comcount){
    alert("Compuer won!! and computer score is : " + comcount)
}
else if (mycount=comcount){
    alert("Compuer won!! and computer score is : " + comcount)
}
else {
    alert("match tie!!")
}





