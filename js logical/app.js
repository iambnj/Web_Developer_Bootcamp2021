const password = prompt("Enter your password!");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log('Valid Password!!')
} else {
    console.log('This is not a valid password!');
}

const num = 2