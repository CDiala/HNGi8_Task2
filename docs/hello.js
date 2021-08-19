function printName() {
    let name = document.getElementById('result').value;
    let result = document.getElementById('answer');

    // if (name !== '' && name !== null && typeof name === 'string') {
    if (name === 'Chibuzo Diala') {
        console.log(name);
        result.innerHTML = name;
    } else {
        console.log('please provide correct name');
        result.innerHTML = 'please provide correct name';
    } 
}
