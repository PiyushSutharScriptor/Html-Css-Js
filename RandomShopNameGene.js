let a,b,c,d;

function adjective(){
    a = "Crazy";
    b = "Amazing";
    c = "Fire";

    d = Math.floor(Math.random()*3);

    if (d==0){
        return a;
    }
    else if (d==1){
        return b;
    }
    else{
        return c;
    }
}

function shopname(){
    a = "Engine";
    b = "Foods";
    c = "Garments";

    d = Math.floor(Math.random()*3)

    if(d==0){
        return a;
    }
    else if (d==1){
        return b;
    }
    else{
        return c;
    }
}

function anotherword(){
    a = "Bros";
    b = "Limited";
    c = "Hub";

    d = Math.floor(Math.random()*3);

    if(d==0){
        return a;
    }
    else if (d==1){
        return b;
    }
    else{
        return c;
    }
}

console.log("Business Name : \n" , adjective() , shopname() , anotherword());

