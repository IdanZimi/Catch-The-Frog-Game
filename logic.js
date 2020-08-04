function frogs() {

    const renderer = Renderer()
    let frogs = []
    let level = 0
    let timerSec = 2
    let frogscounter = 0
    let bgopacity = 1.0


    function bgfade() {
        const head = $(".sec")
        bgopacity -= 0.02
        head.css("background-color", "rgba(255, 242, 130, " + bgopacity + ")")
        if (bgopacity >= 0) {
            setTimeout(bgfade, 30);
        }
    }


    function getFrogs() {
        return frogs
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function addFrog() {
        const mainheight = $(".main").height()
        const viewWidth = $("#container").width()
        const headHeight = $(".head").height()
        const firsRgbNum = Math.floor(Math.random() * 255)
        const secondRgbNum = Math.floor(Math.random() * 255)
        const thirdRgbNum = Math.floor(Math.random() * 255)
        const fontSize = getRandomInt(10, 100)
        const positionLeft = Math.abs(getRandomInt(0, viewWidth) - fontSize) + "px"
        const positionTop = Math.abs(getRandomInt(headHeight, mainheight) - fontSize) + "px"
        frogscounter++
        const frog = {
            id: frogscounter,
            size: fontSize,
            left: positionLeft,
            top: positionTop,
            rgb: [firsRgbNum, secondRgbNum, thirdRgbNum]
        }
        frogs.push(frog)
        // console.log(frogs)
    }
    function removeFrog(frogId) {
        for (let frog of frogs) {
            const frogIndex = frogs.indexOf(frog)
            // console.log(frogIndex)
            if (frog.id == frogId) {
                frogs.splice(frogIndex, 1)
                frogscounter--

            }
        }
    }

    function timer() {
        $("#time").text(timerSec)
        bgfade()
        reduceTime()

    }
    function reduceTime() {
        let a = setInterval(() => {
            if (timerSec > 0) {
                timerSec -= 1
                $("#time").text(timerSec)

            } else if (timerSec == 0 && frogs.length == 0) {
                clearInterval(a)
                movingToTheNextLevel()

            }
            else {
                gameOver()
                clearInterval(a)
            }

        }, 700);
    }

    function movingToTheNextLevel() {
        console.log("You are going to the next level")
        bgopacity = 1.0
        bgfade()
        increaseLevel()
        for (i = 1; i <= level; i++) {
            addFrog()
        }
        timerSec = level + 1
        numOfFrogsUpdate()
        console.log("the time for the next level is:" + " " + timerSec)
        renderer.renderFrogs(getFrogs())
        timer()
        console.log(frogs)
    }

    function gameOver() {
        bgopacity = 1.0
        $(".main").empty()
        $(".main").append(`<div class="game-over">YOU LOST THE GAME </div>`)
        $(".bt2").text("START!")
        timerSec = 2
        frogs = []
        level = 0
        $(".bt2").removeAttr("disabled")
        $("#levelCount").text("-")
        $("#frogCount").text("-")
        $("#time").text("-")


    }

    function increaseLevel() {
        level++
        $("#levelCount").text(level)

    }

    function numOfFrogsUpdate() {
        const frogsLeft = frogs.length
        $("#frogCount").text(frogsLeft)

    }

    return {
        getFrogs: getFrogs,
        addFrog: addFrog,
        timer: timer,
        removeFrog: removeFrog,
        numOfFrogsUpdate: numOfFrogsUpdate,
        increaseLevel: increaseLevel

    }
}