
//to close the modal and open modal

document.getElementById("btn-add").addEventListener('click', function () {

document.querySelector('.bgmodal').style.display='flex';

});

document.querySelector('.close').addEventListener('click',function () {
    document.querySelector('.bgmodal').style.display='none';
});

var divContainer = document.getElementById("Users");

//here I will start to truy to create a div for every new user i add
 const btnSub = document.getElementById('userForm');
 
 btnSub.addEventListener("submit", function(event){
    event.preventDefault();

    
 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
   
    var newUserdiv = document.createElement("div");
    newUserdiv.classList.add('div-shadow');
    newUserdiv.id = "newDiv"

    
    var h1 = document.createElement("H1");
    var h2 = document.createElement("H2");

    var t1 = document.createTextNode(name);
    var t2 = document.createTextNode(email);
   
    /*this below is how you append things you your newdiv
    parent getting child */
    h1.appendChild(t1);
    h2.appendChild(t2);
    newUserdiv.appendChild(h1);
    newUserdiv.appendChild(h2);

    

    divContainer.appendChild(newUserdiv);
    /* 
    document.body.appendChild(newUserdiv);
*/


    console.log('User: '+ name + ' '+email);

    

    /*this closes the windown once submited*/
    document.querySelector('.bgmodal').style.display='none';

      
  });







