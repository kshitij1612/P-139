function preload()
{

}

function setup()
{
    canvas = createCanvas(730,543);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}
function draw()
{
    image(video,0,0,730,543);
}