// code your solution here


function saturdayFun(activity){
    if(activity == null){
        activity = 'roller-skate'
    }    
    const saturday = `This Saturday, I want to ${activity}!`
    
    return saturday
}

function mondayWork(dull){
    if(dull == null){
       dull = 'go to the office'
    }
    const mondays = `This Monday, I will ${dull}.`
    return mondays
}

function wrapAdjective(flair = '*'){
    return function innerfunction(echo = "special"){
        return `You are ${flair}${echo}${flair}!`
    }

}
