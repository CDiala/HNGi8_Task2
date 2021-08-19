function printName() {
    // console.log( parseInt(name) )
    let name = document.getElementById('result').value;
    let result = document.getElementById('answer');

    // console.log(name);
    // console.log(typeof parseInt(name));
    // console.log(typeof name);
    // console.log(parseInt(name));

    // if (name !== '' && typeof parseInt(name) !== "number" && typeof parseInt(name) !== "NaN" && name !== null && typeof name === 'string') {
    if (name !== '' && name !== null && typeof name === 'string') {
        console.log(name);
        result.innerHTML = "Hello, " + name;
    } else {
        console.log('please provide a string');
    } 
}

// printName('12');