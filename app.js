/**
 * Created by kalakrishnagowthami on 3/18/2016.
 */
function Vehicle(name,brand){
    this.name = name;
    this.brand = brand;
}

function Model(type,year){
    this.type = type;
    this.year = year;
}

Model.prototype = new Vehicle("Mustang","Ford");


var car_details = new Model("GT",2015);
 console.log("",car_details.name);

//var btn = document.getElementById("clickBtn");
//btn.onClick = Clickme;

//function fun(e){
//    var nameObj,brandObj,cName,cBrand;
//
//    //e.preventDefault();
//    nameObj = document.getElementById("name");
//    brandObj = document.getElementById("brand");
//
//    cName = nameObj.value;
//    cBrand = brandObj.value;
//
//    console.log(cName,cBrand);
//
//}
function dd(){
    var a=10; b=20;
    var c;
    c=a+b;
   console.log(c);
    console.log(car_details.brand+""+car_details.year);
}

function hoisting(){
    console.log(str);

    var str="Hi Folks!";
}
hoisting();