function person(x,y){
    var t;
    for(var i=0; i<x.length;i++)
    {
        var r=x[i];
        for(j=0; j<y.length;j++)
        {
            var s=y[j];
            if(r.city==s.city)
            {
                
                return s.continent;
            }
        }
    }

}


var a1={
    "name" : "Mary",
    "city" : "London"
}
var a2={
    "name" : "Anita",
    "city" : "Paris"
}
var a3={
    "name" : "Edward",
    "city" : "New York"
}
var a4={
    "name" : "Thomas",
    "city" : "Rome"
}
var a5={
    "name" : "Robin",
    "city" : "Seattle"
}
var a6={
    "name" : "Sophia",
    "city" : "Los Angeles"
}
var a7={
    "name" : "Bruce",
    "city" : "Delhi"
}

var a=[a1, a2, a3, a4, a5, a6, a7];


var b1={
    "city" : "London",
    "continent" : "Europe"
}
var b2={
    "city" : "Delhi",
    "continent" : "Asia"
}
var b3={
    "city" : "Seattle",
    "continent" : "North America"
}
var b4={
    "city" : "Paris",
    "continent" : "Europe"
}
var b5={
    "city" : "New York",
    "continent" : "North America"
}
var b6={
    "city" : "Rome",
    "continent" : "Europe"
}
var b7={
    "city" : "Bengaluru",
    "continent" : "Asia"
}
var b8={
    "city" : "Los Angeles",
    "continent" : "North America"
}



// var c=person(a,b);
// console.log(c);

