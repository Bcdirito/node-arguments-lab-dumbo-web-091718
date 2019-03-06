// code solution here
let generatePassword = function generatePassword(length){
    let l = length || 8
    const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let password = ""

    for (let i = 0, n = alpha.length; i < l; ++i){
        password += alpha.charAt(Math.floor(Math.random() * n))
    }
    return password
}

let length = 10,
number = 1

let argv = process.argv

if (!argv[2] || !argv[3]){
    console.log('Please provide an argument, e.g., 5 or 5 10')
    process.exit(1)
}

if (argv[2]){
    length = parseInt(argv[2], 10)
}

if (argv[3]){
    number = parseInt(argv[3], 10)
}

for (let i = 1; i <= number; i++){
    console.log(generatePassword(length))
}

process.exit(0)