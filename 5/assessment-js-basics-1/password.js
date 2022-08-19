let password = 'password12'
let digitFind = /[0-9]/g

if(password.length >= 10 && password.match(digitFind)){
    console.log('yay good job you have a password')
}else{
    console.log('nope try again')
}
