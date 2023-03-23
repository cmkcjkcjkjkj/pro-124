rightWristX =0;
leftWristX =0;
difference =0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas (550, 400);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw () {
    background('#6E9CE4');
    text('Lets have fun reading the notice board', 90, 100);
    textSize(difference);
    
    

    }


function modelLoaded() {
    console.log('Posenet is initialized!');
}

function gotPoses(results) {
    if(results.length > 0)
    
    {
        console.log(results);

        leftWristX = results[0].pose.leftWristX.x;
        rightWristX = results[0].pose.rightWristX.x;
        differnce  = floor(leftWristX -  rightWristX);
    }
    
   
}