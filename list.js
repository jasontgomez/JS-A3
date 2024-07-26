// create checkbox, text, close to each list item
let nodeList = document.getElementsByTagName("li");
for (let i = 0; i < nodeList.length; i++) {
    // add check box
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    // text content
    let text = document.createTextNode(nodeList[i].textContent);
    nodeList[i].textContent = '';
    
    // add delete button X
    let closeButton = document.createElement("button");
    closeButton.textContent = "\u00D7";
    closeButton.onclick = function() {
        this.parentElement.parentElement.remove();
    };

    // add children to list container
    let listContainer = document.createElement("div");
    listContainer.appendChild(checkBox);
    listContainer.appendChild(text);
    listContainer.appendChild(closeButton);
    // add to list
    nodeList[i].appendChild(listContainer);
}

// function to create a new list item with string input
function newListItem(listString) {
    // new list item
    var li = document.createElement("li");
    
    // add check box
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    // text content
    let text = document.createTextNode(listString);
    
    // add delete button X
    let closeButton = document.createElement("button");
    closeButton.textContent = "\u00D7";
    closeButton.onclick = function() {
        this.parentElement.parentElement.remove();
    };

    // add children to list container
    let listContainer = document.createElement("div");
    listContainer.appendChild(checkBox);
    listContainer.appendChild(text);
    listContainer.appendChild(closeButton);

    // add to whole list
    li.appendChild(listContainer);


    // if not null, add to ul
    if (listString !== '') {
        document.getElementById("listItems").appendChild(li);
    }
} 

// adds user input to list
function addListItem() {
    let inputValue = document.getElementById("itemInput").value;
    newListItem(inputValue);
    resetCheck();
    console.log('added to list - ' + inputValue);
}


// on change, checkbox add checked class
const listCheck = document.querySelector("ul");
listCheck.addEventListener("change", (event) => {
    let parent = event.target.parentNode;
    parent.classList.toggle('checked');

    // reset list
    resetCheck();

});

// reset check
function resetCheck(){
    let nodeCheck = document.querySelectorAll("li");
    //let tempListItem = [];

    const tempListItem = new DocumentFragment();

    // counter
    let nodeCounter = 0;

    while(nodeCounter < (nodeCheck.length-1)) {
        // if checked
        if (nodeCheck[nodeCounter].firstChild.classList.contains("checked")){

            // add as fragment
            tempListItem.appendChild(nodeCheck[nodeCounter].firstChild);

            // remove element
            nodeCheck[nodeCounter].remove();

            // add to list
            let li = document.createElement("li");
            li.appendChild(tempListItem);
            document.getElementById("listItems").appendChild(li);
        }
        nodeCounter = nodeCounter + 1;
    }
}
