var user = {
    name: "joseLuis",
    email: "jLGamerDestroyer69@gmail.com",
    gender: "male",
    sus: "yeah"
};
console.log(user);

var list = [];

const shirt = {
    name: "shirt",
    price: 55000,
    img: "shirt.png",
    stock: 5,
    description: "customizable shirt!!!"
}

const backpack = {
    name: "backpack",
    price: 70000,
    img: "backpack.jpg",
    stock: 4,
    description: "customizable backpack!!!"
}


const pen = {
    name: "pen",
    price: 5000,
    img: "pen.jpg",
    stock: 0,
    description: "customizable pen!!!"
}

const button = {
    name: "button",
    price: 10000,
    img: "button.jpg",
    stock: 3,
    description: "customizable button!!!"
}
list.push(shirt,backpack,pen,button);


function printExpensivesNStock(){
    console.log("These are the expensive ones:")
    list.forEach(element =>{
        if(element.price >= 50000){
            console.log(element.name);
        } })

        console.log("We run out of these ones:")
        list.forEach(element =>{
            if(element.stock < 1){
                console.log(element.name);
            } })
}

    list.forEach(element =>{
        let itemdiv = document.createElement("div");

        itemdiv.innerHTML = 
        `
        <h1>${element.name}</h1>
        <img src="./imgs/${element.img}" alt="${element.img}">
        <h2>$${element.price}</h2>
        <h3>${element.description}</h3>
        <h4>${element.stock} left</h4>
        <br>
        <br>

        `

        document.body.appendChild(itemdiv);
    })

   
printExpensivesNStock();

