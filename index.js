//1.COMPARE TWO JSON:
 
var obj1= {name:"person 1",age:5};
var obj2= {age:5,name:"person 1"};
console.log(isEqual(obj1,obj2));

//2.REST COUNTRIES URL TO PRINT ALL COUNTRY FLAGS:

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);
    for(i=0;i<res.length;i++){
    console.log(res[i].flags);
}
};

//3.SAME CODE TO PRINT ALL COUNTRIES NAMES,REGIONS,SUBREGIONS AND POPULATIONS:

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);
    for(i=0;i<res.length;i++){
    console.log(res[i].name,res[i].region,res[i].subregion,res[i].population);
}
};
