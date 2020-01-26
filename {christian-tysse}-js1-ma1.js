//question 1 
const cat = {
    name: "Georg",
    age: 8,
    complain: function () {
        console.log("meow!")
    }
}
cat.complain();

// question 2 
const heading = document.querySelector("h3");
console.dir(heading);

//question 3 
heading.style.fontSize = "2em";

//question 4 
heading.classList.add("subheading");
console.log(heading.className)

//question 5
const paragraph = document.querySelector("p");

//question 6 
const resultsContainer = document.querySelector("div");
resultsContainer.innerHTML = "<p>new paragraph</p>";

//question 7
function catFunction(catArray) {
    for (let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }
}

const cats = [{
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",

    },
    {
        name: "Blurt",
        age: 21
    }
];

 catFunction(cats);

//question 8

 function catYeee(catArray) {  
     let catsHTML = "";
     for (let i = 0; i < catArray.length; i++) {
         catsHTML += `<h5>${catArray[i].name}<h5>`;
     }
     console.log(catsHTML)

     return catsHTML;
 }
 //question 9
 
 resultsContainer.innerHTML = catYeee(cats);

 // question 10

 function catDiv(catArray){
     let divHTML = ""
     for (let i = 0; i < catArray.length; i++) {
    let age = "age unknown";

    if(catArray[i].age){
        age = catArray[i].age
    }

    divHTML += `<div>
    <h5>${catArray[i].name}</h5>
    <p>${age}</p>
    </div>`;
}
console.log(divHTML);

return divHTML;
 }

 resultsContainer.innerHTML = catDiv(cats);