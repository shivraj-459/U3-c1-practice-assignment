var studentdata=JSON.parse(localStorage.getItem("studentdata"));
//console.log(studentdata);

display(studentdata);


function display(studentdata)
{
    studentdata.forEach(function(elem,i)
    {

     var row=document.createElement("tr");
     
     var td1=document.createElement("td");
     
     var image=document.createElement("img");
     image.src=elem.url;

     td1.append(image);

     var td2=document.createElement("td");
     td2.innerText=elem.name;

     var td3=document.createElement("td");
     td3.innerText=elem.batch;

     var td4=document.createElement("td");
     td4.innerText=elem.course;

     var td5=document.createElement("td");
     td5.innerText=elem.unit;

     var td6=document.createElement("td");

     var remove=document.createElement("button");
     remove.innerText="REMOVE";
     remove.style.color="red";
     remove.addEventListener("click",function()
     {
         RemoveFn(elem,i)
     })


     td6.append(remove)
     row.append(td1,td2,td3,td4,td5,td6)
     document.querySelector("#data").append(row)


    })
}

var trash=[];
function RemoveFn(elem,i)
{
    var del=studentdata.splice(i,1)
    
     trash.push(del);
     //console.log(trash)
     localStorage.setItem("trash",JSON.stringify(trash))
     localStorage.setItem("studentdata",JSON.stringify(studentdata));
     window.location.reload();
}

//-------------------------------------------------------------------------

var x=studentdata.filter(function(elem)
{
    return elem.batch=="batch01"
})


document.querySelector("#B1").innerText="Batch-01"+"  :"+x.length;
//console.log(x.length)

//--------------------------------------------------------------------------

var y=studentdata.filter(function(elem)
{
    return elem.batch=="batch02"
})


document.querySelector("#B2").innerText="Batch-02"+"  :"+y.length;
//console.log(y.length)

//--------------------------------------------------------------------------
var z=studentdata.filter(function(elem)
{
    return elem.batch=="batch03"
})

document.querySelector("#B3").innerText="Batch-03"+"  :"+z.length;
//console.log(z.length)

//---------------------------------------------------------------------------
var m=studentdata.filter(function(elem)
{
    return elem.batch=="batch04"
})


document.querySelector("#B4").innerText="Batch-04"+"  :"+m.length;
//console.log(m.length)