// Selecting the button, unordered list, and input elements
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

// Event listener for button click
btn.addEventListener("click", function () {
    addItem();
});

// Event listener for Enter key press in the input field
inp.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // Check if Enter key is pressed
        addItem();
    }
});

// Function to add a new list item
function addItem() {
    let inputValue = inp.value.trim(); // Trim leading/trailing spaces

    // Check if the input value is not empty
    if (inputValue !== "") {
        // Create a new list item
        let li = document.createElement("li");
        li.innerText = inputValue;
        
        // Create a "Done" button for the list item
        let doneBtn = document.createElement("button");
        doneBtn.classList.add("done");
        doneBtn.innerText = "Done";
        
        // Event listener for the "Done" button to remove the parent list item
        // doneBtn.addEventListener("click", function () {
        //     let par = this.parentElement;
        //     par.remove();
        // });

        // Append the "Done" button to the list item
        li.appendChild(doneBtn);
        
        // Clear the input field value
        inp.value = "";
        
        // Append the new list item to the unordered list
        ul.appendChild(li);
    }
}

// Event listener for click on the unordered list
ul.addEventListener("click",function(){
    if(event.target.nodeName=="BUTTON"){

        let listItem=event.target.parentElement;
        listItem.remove();
    }
})
