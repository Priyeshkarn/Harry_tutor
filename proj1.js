var array=[];
let elementToEdit = null;
function abc(){
    event.preventDefault();
    var tableBody=document.getElementsByTagName('tbody')[0];
    var fname=document.getElementById('firstname').value;
    var lname=document.getElementById('lastname').value;
    var email=document.getElementById('email').value;
    
    // if elementToEdit is set, then fetch the item from the array and replace that element with new { 'firstName': }
    // if () {
    //     array[itemNumber]
    // }
    if(elementToEdit===null)
    {
        array.push({'firstname':fname, 'lastname':lname, 'email':email});
    }

    else
    {
        array[elementToEdit]={'firstname':fname, 'lastname':lname, 'email':email};
    }
    

    var total='';
    for(var item=0; item<array.length; item++)
    {
        total+='<tr id="tr_'+item+'"><td>'+array[item].firstname+'</td><td>'+array[item].lastname+'</td><td>'+
            array[item].email+'</td><td><button class="editstyle" onclick="editrow(tr_'+item+', '+item+')">Edit</button></td><td><button class="btnstyle" onclick="deleterow(tr_'+item+')">Delete</button></td></tr>';
    }
    // console.log(total);
    tableBody.innerHTML=total;
    console.log(tableBody);
    elementToEdit = null;
}

function deleterow(ele){
// console.log(ele);
ele.remove();
}

function editrow(row, itemNumber){
    document.getElementById('firstname').value=array[itemNumber].firstname;
    document.getElementById('lastname').value=array[itemNumber].lastname;
    document.getElementById('email').value=array[itemNumber].email;
    elementToEdit = itemNumber;
}

