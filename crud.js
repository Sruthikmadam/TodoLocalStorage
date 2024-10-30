

let data = JSON.parse(localStorage.getItem("object")) || [];


let counter = data.length + 1;
function readall(){
    localStorage.setItem("object",JSON.stringify(data));
    var tabledata=document.querySelector(".data-table");
    var object=localStorage.getItem('object');
    var objectdata=JSON.parse(object);
    var elements="";
    objectdata.map(record=>(
        elements +=`<tr>
    
        <td>${record.task} </td>
        <td>${record.date} </td>
        <td>
        <button class="edit" onclick="edit(${ record.id})">Edit</botton>
        <button class="delete" onclick="delet(${ record.id})">Delete</botton>
       
        
        </td>
        </tr>`
    ))
    tabledata.innerHTML=elements;
   
    }
function delet(id){
        data=data.filter(rec=>rec.id!==id);
        
        // Update the data in local storage
        localStorage.setItem("object", JSON.stringify(data));
        // Re-render the table
        readall();
    }

function create(){
    document.querySelector(".create-form").style.display="block";
    document.querySelector(".task").value="";
    document.querySelector(".date").value="";
    document.querySelector(".add-div").style.display="none";

}
function add(){
    var task=document.querySelector(".task").value;
    var date=document.querySelector(".date").value;
    if(task==="" ||date==="" ){
        alert("enter data")
    } else{
    var newObj={id:counter++, task:task,date:date};
    data.push(newObj);
    document.querySelector(".create-form").style.display="none";
    document.querySelector(".add-div").style.display="block";
    
    readall();
   
}}
function edit(id){
    document.querySelector('.add-div').style.display="none";
    document.querySelector('.update-form').style.display="block";
    var obj=data.find(rec=>rec.id===id);

    document.querySelector('.utask').value=obj.task;
    document.querySelector('.udate').value=obj.date;
    document.querySelector('.id').value=obj.id;

}
function update(){
    
    var id=parseInt(document.querySelector('.id').value);
    var task=document.querySelector('.utask').value;
    var date=document.querySelector('.udate').value;
    var index=data.findIndex(rec=>rec.id===id);
    data[index]={id,task,date};
    document.querySelector('.update-form').style.display="none";
    document.querySelector('.add-div').style.display="block";
    readall();

}