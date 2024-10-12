

function changeIconOnClick(containerId, animationData) {
    var animation = lottie.loadAnimation({
        container: document.getElementById(containerId),
        renderer: 'svg',
        loop: false, // Ensure it does not loop
        autoplay: false, // Will play on click
        animationData: animationData
    });

    // Add event listener for click to play animation and change color
    document.getElementById(containerId).addEventListener('click', () => {
        animation.goToAndPlay(0); // Start animation from the beginning
    });

    // Listen when the animation is loaded, then change color
    animation.addEventListener('DOMLoaded', () => {
        const svgElement = document.getElementById(containerId).getElementsByTagName('svg')[0];
        
        // Change the fill color of the paths in the SVG
        svgElement.querySelectorAll('path').forEach((path) => {
            path.setAttribute('fill', '#FF0000'); // Change the icon color to red
        });
    });
}
//changeIconOnClick('more-ong-container',{"v":"5.6.5","fr":30,"ip":0,"op":21,"w":32,"h":32,"nm":"menu-V4","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"menu-V4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[10.251,10.443,0],"ix":2},"a":{"a":0,"k":[6.251,6.443,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[16.5,6.443],[7.5,6.443]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":20,"s":[23]}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":0,"s":[7.504,6.429],"to":[-0.208,0],"ti":[0.208,0]},{"t":10,"s":[6.254,6.429]}],"ix":2},"a":{"a":0,"k":[7.504,6.429],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[1],"y":[0]},"t":10,"s":[0]},{"t":20,"s":[45]}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"top lilne","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[20,12.172],[4,12.172]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[11.998,12.168],"ix":2},"a":{"a":0,"k":[11.998,12.168],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":15,"s":[-45]}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"center line","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[16.5,17.828],[7.5,17.828]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"t":20,"s":[77]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":0,"s":[16.5,17.828],"to":[0.188,0],"ti":[-0.188,0]},{"t":10,"s":[17.625,17.828]}],"ix":2},"a":{"a":0,"k":[16.5,17.828],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[1],"y":[0]},"t":10,"s":[0]},{"t":20,"s":[45]}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"bottom line","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":21,"st":0,"bm":0}],"markers":[]});