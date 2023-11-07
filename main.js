noseX=0;
noseY=0;


function preload()
{
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded()
{
    console.log('Posenet has been initialized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-20;
        noseY = results[0].pose.nose.y-10;
        console.log('nose x = ' + noseX );
        console.log('nose y = ' + noseY );
    }
}

function draw()
{
    image(video, 0 , 0 , 300 , 300);
    image(mustache,noseX,noseY,50,50);

}

function take_snapshot()
{
    save("mustache-Filter.png");
}