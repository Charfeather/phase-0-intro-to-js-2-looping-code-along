// Code your solutions in this file
const names =["Guadalupe","Ollie","Aki"]
let messages =[]
function writeCards(names){
    for (let d = 0; d<names.length; d++){
     let message=`Thank you, ${names[d]}, for the wonderful surprise gift!`
     messages.push(message)
     debugger;
    }
    return messages
    
}
const numbers=["10","9","8","7","6","5","4","3","2","1","0"]
function countDown(){
    let countDown=0
    while(countDown<11){
        console.log(countDown++)
    }
}