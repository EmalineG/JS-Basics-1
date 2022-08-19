let password = 'passrd123455234532'
let digitFind = /[0-9]/g
let letterFind = /[a-z]/g
let space = " "

if(password.length >= 10 && password.match(digitFind) && password.match(letterFind) && !password.match(space) && !password.includes('password')){
    console.log('yay good job you have a password')
}else{
    console.log('nope try again')
}
