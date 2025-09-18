export function gradeScore(myname, age, score){
    return `Hi ${myname}, I believe you're ${age}yrs old, and you got ${score}`
}

export function passMark(myname){
    let passMark = [50, 70, 80, 90, 100];
    if(passMark > 65){
        return`${myname}, did not perform well enough`
    }else{
        return `Congratulations ${myname}, you made it`
    }
    
}

