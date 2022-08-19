let password = 'pas32'
let digitFind = /[0-9]/g
let letterFind = /[a-z]/g

if(password.length >= 10 && password.match(digitFind) && password.match(letterFind)){
    console.log('yay good job you have a password')
}else{
    console.log('nope try again')
}
