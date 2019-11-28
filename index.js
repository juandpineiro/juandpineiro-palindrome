module.exports = Phrase;
// Adds "reverse" to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters of the content.
  // For example:
  //    new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    // RegExp match method
    // return (this.content.match(/[a-z]/gi) || []).join("");
    
    // Functional programming method
    const lettersRegEx = /[a-z]/gi
    return Array.from(this.content).filter(c => c.match(lettersRegEx)).join("");
  }

  // Returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    if (!!this.processedContent()) {
      return this.processedContent() === this.processedContent().reverse();
    }
  }
}
