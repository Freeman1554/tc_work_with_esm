function goodPitch(location){
    return`Our matches will be played in ${location}, because it's a good field`
}

function goodPitch1(){
    let location = "Abuja-Stadium";
    let goodPitch1 = location;
    if(goodPitch1 !== location){
        return`${location} is good for football let's check it out`
    }else{
        return`${location} has a poor pitch`
    }
    
}
export {goodPitch, goodPitch1}