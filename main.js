Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data+'">';

    });
}

console.log("m15 version is ",ml5.version);

classifier=ml5.imageClassifer("https://teachablemachine.withgoogle.com/models/gshWTq-Xm/model.json",modelloaded);
function modelloaded(){
    console.log("model is loaded");
}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error,result){
    if (error) {
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=result[0].label;
    }
}
