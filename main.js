function setup()
{

    canvas = createCanvas(640,400);
    canvas.position(450,300);

    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";

}
function draw()
{

    image(video,0,0,640,400)
    tint(tint_color);



}

function filter_color()
{

    tint_color = document.getElementById("random_color").value ; 


}

function take_snapshot()
{

    save('selfie.png');

}