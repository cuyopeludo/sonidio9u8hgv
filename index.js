
function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/AqI1ZfULV/model.json",nkb);

}
function nkb(){
classifier.classify(gty);

}


function gty(error, mjk){
if (error) {
    console.log(error);
} else {
    console.log(mjk);
    document.getElementById("result_label").innerHTML="silencion pusieron" + mjk[0].label;
    document.getElementById("result_confidence").innerHTML="ohhhhhhhhhhhhhhhhhhhhh" + mjk[0].confidence;
    
}

}