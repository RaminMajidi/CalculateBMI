
function calculateBMI(){

    let height = parseInt(document.getElementById("in_height").value);
    let weigth = parseInt(document.getElementById("in_weigth").value);
    let result = document.getElementById("result");

    if (height === "" || isNaN(height)) {
    alert("لطفا قد خود را وارد کنید");
}
else if (weigth === "" || isNaN(weigth)) {
    alert("لطفا وزن خود را وارد کنید");
}
else{
    document.getElementById("image_cover").src = "image/bmi_cover.jpg";
    let bmi = (weigth/((height*height)/10000)).toFixed(2);
    
    if(bmi<=18.5){
        result.style.color="#ffbb29";
        result.innerHTML =bmi  + "</br>"+"کمبود وزن";
    }
    else if(bmi>18.5 && bmi<=24.9){
        result.style.color="#42ff29";
        result.innerHTML = bmi+ "</br>"+" وزن نرمال";
    }
    else if(bmi>=25 && bmi<=30){
        result.style.color="#fa4700";
        result.innerHTML = bmi + "</br>"+"اضافه وزن";
    }
    else if(bmi>=30){
        result.style.color="#ff0000";
        result.innerHTML =bmi  + "</br>"+"اضافه وزن زیاد";
    }
}  
}
