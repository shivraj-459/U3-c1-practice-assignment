document.querySelector("#masai").addEventListener("submit",Myfunc)
var studentdata=JSON.parse(localStorage.getItem("studentdata")) || [];

function Myfunc()
{
    event.preventDefault()

    Myobj={
        name:masai.name.value,
        course:masai.course.value,
        unit:masai.unit.value,
        url:masai.url.value,
        batch:masai.batch.value
    }

    studentdata.push(Myobj);

    localStorage.setItem("studentdata",JSON.stringify(studentdata));
   
    window.location.reload()
}



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
