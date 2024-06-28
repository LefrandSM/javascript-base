// JavaScript Display Possibilities
// JavaScript can "display" data in different ways:

// Writing into an HTML element, using innerHTML.
let readBtn = document.querySelector(".card-fish strong");
readBtn.addEventListener("click", () => {
    let readContent = document.querySelector(".card-fish p");
    let lessBtn = readBtn.classList.contains("less");
    if (lessBtn) {
        readContent.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur.."
        readBtn.classList.remove("less");
    } else {
        readContent.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis quidem, amet aperiam quasi necessitatibus similique. Eveniet earum animi beatae quam rerum accusamus vitae eius quo!"
        readBtn.classList.add("less");
    }
});

// Writing into the HTML output using document.write().
// The document.write() method should only be used for testing.
// document.write("saya jago");

// Writing into an alert box, using window.alert().
let buyBtn = document.querySelector(".card-fish button");
console.log(buyBtn);
buyBtn.addEventListener("click", () => {
    window.alert("Cool, you have buy this fish");
});

// Writing into the browser console, using console.log().
// For debugging purposes, you can call the console.log() method in the browser to display data.
// console.log(readContent);

// JavaScript Print
// window.print() method in the browser to print the content of the current window.
