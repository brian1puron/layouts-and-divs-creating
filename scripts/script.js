

const BtnAdd = document.querySelector(".btn-add");

BtnAdd.addEventListener('click', AddNew);

function AddNew(){

    const newDiv = document.createElement("div");  //this will create a new div
    console.log("add");
    newDiv.classList.add('div-shadow'); //this will be the link to the cssa the class 
    newDiv.textContent="brian the best";  //this is just to add content/ we can pass variables
    
    document.body.appendChild(newDiv); //this will actually make it visible in the body if i want tp appende inside anotehr div 
    //then i have to create a new variable use the getelement by id and the use nameofvariable.body.append


}


















