function mash(){
    return "You will live in a " + getHouse() + " , travel to " + getTravelCount() + " countries, have a pet named "+ getPet() + 
    ", and go to " + getdestination();
}
function ranNumGenerator(Num1){
    let ranDecimal = Math.random();
    let randNum = ranDecimal * Num1;
    let ranInteger = Math.floor(randNum);

    return ranInteger;
   

}
let userInput = process.argv[2];
function getHouse(){
    let houseArray= [userInput||"Apartment","Penthouse","House","Cabinet"];
    
    let ranIndex = ranNumGenerator();
    if(ranIndex= 1){
        ranIndex = 1
    }

    return houseArray[ranIndex] 
}
function getTravelCount(){
    let randTravelCount = ranNumGenerator(101);
        return randTravelCount;
    
}
function getPet(){
   
    let randomPets =["Akamaru","Sparky","Krypto","Wolf"];

    let bop =ranNumGenerator();
    
    if(bop < 0.5){
        bop = 1

    }
    else{
        bop = 2
    }
    return randomPets[bop];
   
}
function getdestination(){
    let ranDestin = ["Venus","China","Tanzania","Poland"];
    let Amir = ranNumGenerator(ranDestin.length);
    return ranDestin[Amir];

}
function getOccupation(){
    let ranOccu = ["Entrepreneur","Real estate agent","Sensei","Big Business owner"];
    let Fisher = ranNumGenerator(ranOccu.length);
    return ranOccu[Fisher];
}
    let ok = mash();
    console.log(ok);
    
    
    
        