let args = process.argv.filter(x=> +x == x)

function generatePasswords(length){
    let alphabet ='abcdefghijklmnopqrstuvwxyz'
    let temp = ""
    for(let i=0; i<length;i++){
        temp+= alphabet[~~Math.random()*26]
    }
    return temp
}

for(let i=0; i<args[1]; i++){
    console.log(generatePasswords(args[0]))
}

process.exit(0)