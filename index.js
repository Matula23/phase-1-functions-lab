// Code your solution in this file!
const HQ = 42;
const distanceFromHqInBlocks = function(location){
    const distance = Math.abs(HQ - location);
    return distance
}

const distanceFromHqInFeet = function(location){
    return distanceFromHqInBlocks(location) * 264
}

const distanceTravelledInFeet = function(loc1,loc2){
    const distance = Math.abs(loc1 - loc2) * 264;
    return distance
}

function calculatesFarePrice(loc1, loc2){
    const distance = distanceTravelledInFeet(loc1, loc2);

    if(distance <= 400){
        return 0
    } else if (distance < 2000){
        return (distance - 400) * .02;
    } else if (distance < 2500){
        return 25;
    }else{
        return "cannot travel that far"
    }
}