function transformString(input) {
    let output = '';
    const length = input.length;

    if (length % 15 === 0) { // Divisible by both 3 and 5
        output = input.split('').reverse().join('');
        output = output.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) { // Divisible by 3
        output = input.split('').reverse().join('');
    } else if (length % 5 === 0) { // Divisible by 5
        output = input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else { // Not divisible by 3 or 5 or 15
        output = input;
    }

    return output;
}

// Test cases
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"