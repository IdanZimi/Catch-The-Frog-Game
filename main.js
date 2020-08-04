const render = Renderer()
const frogis = frogs()
render.renderFrogs(frogis.getFrogs())

const height = $(document).height()
$("#body").height(height)
$(".bt2").on("click", function () {
    const viewWidth = $("#container").width()
    const viewHeight = $("#container").height()
    // console.log("width "+viewWidth)
    // console.log("heihgt "+viewHeight)
    $(this).attr('disabled', 'disabled')
    $(this).text("TIME IS RUNNING!")
    frogis.addFrog()
    frogis.increaseLevel()
    frogis.numOfFrogsUpdate()
    frogis.timer()
    render.renderFrogs(frogis.getFrogs())

})


$(".main").on("click", ".fa-frog", function () {
    const frogID = $(this).data().id
    frogis.removeFrog(frogID)
    frogis.numOfFrogsUpdate()
    render.renderFrogs(frogis.getFrogs())


})
