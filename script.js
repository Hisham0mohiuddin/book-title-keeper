let dialog = document.querySelector("dialog");
let books_dom = document.querySelector(".the-books");
let submit_movie_dom= document.querySelector("#books-submit");
let form = document.querySelector("form");

let the_show=document.querySelector(".the-books")

let submit_title_dom = document.querySelector('input[name="title"]');
let submit_author_dom= document.querySelector('input[name="author"]');
let submit_number_dom = document.querySelector('input[name="pages"]');

books=[];


function add(){
    dialog.showModal();
}

function Book(title, author,page,yes){
    this.title = title;
    this.author = author;
    this.page= page;
    this.read = yes;
}
function showbooks(){
    the_show.innerHTML = ""; // Clear previous content

    // Loop through the books array
    for (let i = 0; i < books.length; i++) {
        // Create a container for each book
        let ele = document.createElement("div");
        ele.classList.add("one-book");

        // Create individual elements for each attribute
        let titleElement = document.createElement("p");
        titleElement.textContent = "Title: " + books[i].title;  // Display title
        ele.appendChild(titleElement);

        let authorElement = document.createElement("p");
        authorElement.textContent = "Author: " + books[i].author;  // Display author
        ele.appendChild(authorElement);

        let pageElement = document.createElement("p");
        pageElement.textContent = "Pages: " + books[i].page;  // Display page number
        ele.appendChild(pageElement);

        let readElement = document.createElement("p");
        readElement.textContent = "Read: " + (books[i].read ? "Yes" : "No");  // Display read status
        ele.appendChild(readElement);

        // Create the delete button
        let deletebtn = document.createElement("button");
        deletebtn.textContent = "DELETE"; // Set the text for the button

        // Ensure the button is visible and positioned properly
        deletebtn.style.marginTop = "10px";  // Add some margin for better visibility

        // Add click event listener
        deletebtn.addEventListener("click", function() {
            books.splice(i, 1); // Remove the book at index `i`
            showbooks(); // Refresh the book list
        });

        // Append the delete button to the book container
        ele.appendChild(deletebtn);

        // Append the book element to the parent container
        the_show.appendChild(ele);
    }
}


form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let title= submit_title_dom.value;
    
    let author= submit_author_dom.value;
    
    let page = +submit_number_dom.value;
    
    let selectedRadio = document.querySelector('input[name="read"]:checked').value;
    let temp;
    if (selectedRadio=="yes"){
        temp = new Book(title,author,page,true);
    }
    else{
        temp = new Book(title,author,page,false);
    }
    books.push(temp);
    showbooks();
    dialog.close();
    document.querySelector("form").reset();
})

