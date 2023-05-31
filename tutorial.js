var a=[{"name":"Jack","country":"USA","age":35},
{"name":"Amit","country":"India","age":38},
{"name":"Edward","country":"USA","age":41},
{"name":"Vishal","country":"India","age":30},
{"name":"Annie","country":"USA","age":27},
{"name":"Nick","country":"France","age":32},
{"name":"Francis","country":"France","age":44},
{"name":"Preeti","country":"India","age":25},
{"name":"Sophie","country":"France","age":29},
{"name":"Harpreet","country":"India","age":48},
{"name":"Bob","country":"USA","age":21}];

function total(arr = [], init = false){
    if (init) {
        arr = a;
    }
    var q=document.getElementById('Pdiv');
    var str='<tr><th onclick="sortname()">Name</th><th onclick="sortcountry()">Country</th><th onclick="sortage()">Age</th></tr>';
    console.log('type of,', typeof arr)
    for(var i=0; i<arr.length; i++)
    {
        str=str+'<tr><td>'+arr[i].name+'</td>'+'<td>'+arr[i].country+
        '</td>'+'<td>'+arr[i].age+'</td>'+'</tr>';
    }
    var b='<table>'+str+'</table>';
    q.innerHTML=b;
}

function hide(){
    var q=document.getElementById('Pdiv');
    q.innerHTML='';
}

function sortname(){
    var z=a.sort(function(x,y){
        var n=x.name.charAt(0);
        var o=y.name.charAt(0);
        return n.charCodeAt(0)-o.charCodeAt(0);
    });
    total(z);
}
function sortcountry(){
    var z=a.sort(function(x,y){
        var n=x.country.charAt(0);
        var o=y.country.charAt(0);
        return n.charCodeAt(0)-o.charCodeAt(0);
    });

    var m=[], n=[], o=[], j=0, k=0, l=0;
    for(var i=0; i<a.length; i++)
    {
        if(z[i].country==='India')
        {
            m[j]=z[i];
            j++;
        }
        else if(z[i].country==='France')
        {
            n[k]=z[i];
        
            k++;
        }
        else if(z[i].country==='USA')
        {
            o[l]=z[i];
            l++;
        }
    }

    var w=[];
    m.sort(function(x,y){
        var t=x.name.charAt(0);
        var w=y.name.charAt(0);
        return t.charCodeAt(0)-w.charCodeAt(0);
    })
    

    
    n.sort(function(x,y){
        var t=x.name.charAt(0);
        var w=y.name.charAt(0);
        return t.charCodeAt(0)-w.charCodeAt(0);
    })
    
    
    o.sort(function(x,y){
        var t=x.name.charAt(0);
        var w=y.name.charAt(0);
        return t.charCodeAt(0)-w.charCodeAt(0);
    })
    for(var i=0; i<k; i++)
    {
        w.push(n[i]);
    }
    for(var i=0; i<j; i++)
    {
        w.push(m[i]);
    }
    for(var i=0; i<l; i++)
    {
        w.push(o[i]);
    }
    


    // var q=document.getElementById('Pdiv');
    // var str='<tr><th onclick="sortname()">Name</th><th onclick="sortcountry()">Country</th><th onclick="sortage()">Age</th></tr>';
    // for(var i=0; i<w.length; i++)
    // {
    //     str=str+'<tr><td>'+w[i].name+'</td>'+'<td>'+w[i].country+
    //     '</td>'+'<td>'+w[i].age+'</td>'+'</tr>';
    // }
    // var b='<table>'+str+'</table>';
    // q.innerHTML=b;
    total(w);
}
function sortage(){
    var z=a.sort(function(x,y){
        return x.age-y.age;
    });
    total(z);
}
