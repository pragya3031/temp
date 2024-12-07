function validateForm() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    // Validate Name
//     name contains only alphabets: The regular expression /^[A-Za-z]+$/
//  checks if the input string (name) consists of only uppercase (A-Z) or 
//      lowercase (a-z) alphabetic characters, and nothing else.

// ^ asserts the start of the string.
// [A-Za-z] matches any alphabet (uppercase or lowercase).
// + ensures that there is at least one character.
// $ asserts the end of the string.
// name has a minimum length of 6 characters: name.length < 6 checks if the 
// length of the string name is less than 6.
    if (!/^[A-Za-z]+$/.test(name) || name.length < 6) {
        alert("Name must contain only alphabets and be at least 6 characters long.");
        return false;
    }

    // Validate Password
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    alert("Validation successful!");
    return true;
}
