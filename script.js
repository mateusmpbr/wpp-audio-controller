var button;
var audios;
var pbRate;
var content;

const interval = setInterval(function(){
    
    const header = document.querySelector("._3auIg")
    const myTargets = document.querySelector(".app, .h70RQ, .two");
    
    if(header && myTargets){
        
        clearInterval(interval);
        
        createButton(header)

        // Add Compatibility for MutationObserver in old Chrome versions
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        var observer = new MutationObserver(function(mutations, observer) { 
            setPlaybackRate()
        });

        button.addEventListener("click", function(){
            changeValues(button);
            setPlaybackRate();
        })

        observer.observe(myTargets, {
            attributes: true, 
            attributeFilter: ['class'],
            subtree: true, 
        });

    }

}, 1000)

function createButton(header){
    button = document.createElement("button");
    button.innerHTML = "2x";
    button.classList.add("my-button");
    header.appendChild(button);

}

function setPlaybackRate(){
    audios = document.querySelectorAll("audio"); 
    audios.forEach((audio)=>{
        audio.playbackRate = pbRate
    })

}

function changeValues(button){
    if (button.innerHTML == "2x"){
        pbRate = 2;
        content = "1x";
    }else{
        pbRate = 1
        content = "2x";
    }

    button.innerHTML = content

}