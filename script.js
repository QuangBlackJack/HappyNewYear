var x;

var y = document.getElementById("myAudio");

function playAudio() {
    y.play();
}


function show() {
    x = document.getElementById("name").value;
    document.getElementById("board").innerHTML = ` <div style=" margin: 0;
                                                            position: absolute;
                                                            top: 30%;
                                                            left: 50%;
                                                            transform: translate(-50%, -50%);">
                                                                <h1>Click The Red Envelope</h1>
                                                            </div>
                                                            <div style=" margin: 0;
                                                            position: absolute;
                                                            top: 50%;
                                                            left: 50%;
                                                            transform: translate(-50%, -50%);">
                                                            
                                                                    <div><button class="container" onclick="boom()"> <img class="image"
                                                                                src="24fbd0c5d3a596a00455cad25ed6b4f8.png_wh300.png" alt="">
                                                                            <div class="overlay">
                                                                                <div class="text">Click here to recieve your gift</div>
                                                                            </div>
                                                                        </button></div>

                                                                </div>`;
}

function boom() {
    playAudio();
    document.getElementById("board").innerHTML = `<h1 style=" margin: 0;
                                                            position: absolute;
                                                            top: 50%;
                                                            left: 50%;
                                                            transform: translate(-50%, -50%);">
                                                                <center>
                                                                    Happy New Year
                                                                    <br>
                                                                    ${x} 
                                                                </center>

                                                            </h1>
                                                            <div class="firework"></div>
                                                            <div class="firework"></div>
                                                            <div class="firework"></div>`;
}