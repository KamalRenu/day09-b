var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all',true);
request.send();
request.onload = function(){
    var a = JSON.parse(request.response);
    console.log(a);
    var b = a.filter((a)=>a.population<200000);
    var c = b.map((a)=>a.name);
    console.log(c);
}