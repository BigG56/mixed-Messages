//generate random number
function getRandNum (num) {
    return Math.floor(Math.random() * num)
}
//Message options
const messSelect = {
  signs: ['Dragon', 'Horseshoe', 'Owl', 'Joker', 'Wolf'],
  insper: ['The past cannot be changed', 'Opinions dont define your reality', 'Things always get better with time', 'Hapiness is found from within', 'Kindness is free'],
  joke: ['Two artists had an art constest...It ended in a draw.', 'why did the nurse need a red pen at work? So she can draw blood.', 'How do trees getr online? They just log on.', 'What do you call a bear with no teeth? A gummy bear.', 'What did one traffic light say to the other? Dont look im changing.']
}
//Message array
const message = [];
//Looping thru the message objects
for(let obj in messSelect) {
    let i = getRandNum(messSelect[obj].length)
//Using the object properties to create the messages
    switch (obj) {
        case 'signs':
            message.push(`Your sign today is: ${messSelect[obj][i]}.`)
            break
        case 'insper':
            message.push(`Your insperational for today: ${messSelect[obj][i]}.`)
            break
        case 'joke':
            message.push(`Your joke for today: ${messSelect[obj][i]}.`)
            break
        default:
            message.push('Not enough information')
     }
}
//Formating the message
function formatMess(mess) {
    const format = message.join('\n')
    console.log(format);
}
formatMess(message);