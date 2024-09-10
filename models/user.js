const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  
  email: {
    type: String,
    unique: true,
    required: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please Provide a valid email",
    ],
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);

// regex (regular expressions) they are used to define patterns
// bcrypt

// Regex, short for regular expression, is a powerful pattern matching tool used in programming. it allows you to search, validate and extract data from strings using a unique syntax. This pattern can be as basic as searching for a comma (,) in a text or as complex as searching for a valid email address in a text.

// Bcrypt is a popular password hashing algorithm used to securely store passwords in a database. It's a one-way hashing function that takes a password as input and produces a fixed-length string of characters, known as a hash, that cannot be reversed or decrypted.

// Bcrypt runs a complex hashing process, during which a user’s password is transformed into a fixed-length thread of characters. It uses a one-way hash function, meaning that once the password is hashed, it cannot be reversed to its original form. Every time the user logs into their account, bcrypt hashes their password anew and compares the new hash value to the version stored in the system’s memory to check if the passwords match.

// Hashing refers to the process of generating a fixed-size output from an input of variable size using the mathematical formulas known as hash functions.
