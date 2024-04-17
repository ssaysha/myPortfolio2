


// converting time to a format of hour, min, sec and ms
function timeToString(time) {
        let diffInHrs = time/3600000
        let hh = Math.floor(diffInHrs)

        let diffInMin = (diffInHrs - hh) * 60
        let mm = Math.floor(diffInMin)

        let diffInSec = (diffInMin - mm) * 60
        let ss = Math.floor(diffInSec)

        let diffInMs = (diffInSec-ss) * 100
        let ms = Math.floor(diffInMs)
        
        let MM = mm.toString().padStart(2, "0")
        let SS= ss.toString().padStart(2, "0")
        let MS = ms.toString().padStart(2, "0") 
        return `${MM}:${SS}:${MS}`;
        }
        console.log(timeToString(1000000))

        //Declaring variables 
        let startTime;
        let elapsedTime = 0;
        let timerInterval;

        // create function to modify innerHTML 
        function print(txt) {
            document.getElementById("display").innerHTML = txt;
        }
        
        // // creating startTime, pause and reset functions 
        function start() {
            startTime = Date.now() - elapsedTime;
            timerInterval = setInterval(function printTime() {
             elapsedTime = Date.now() - startTime;
             print(timeToString(elapsedTime));   
            }, 10);
            showButton("PAUSE")
        }
        function pause() {
            clearInterval(timerInterval);
            showButton("PLAY")
        }
        function reset() {
            clearInterval(timerInterval);
            print("00:00:00");
            elapsedTime = 0;
            showButton("PLAY")
        }
           // creating event listener 
            let playButton = document.getElementById("playButton")
            let pauseButton = document.getElementById("pauseButton")
            let resetButton = document.getElementById("resetButton")

            playButton.addEventListener("click", start);
            pauseButton.addEventListener("click", pause);
            resetButton.addEventListener("click", reset);

          


            


















