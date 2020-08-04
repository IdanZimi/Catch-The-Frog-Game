function Renderer() {

    function renderFrogs(frogs) {
        $(".main").empty()
        for (let frog of frogs) {
            $(".main").append(`<div><i 
            style="position:absolute; left:${frog.left}; top:${frog.top}; font-size:${frog.size}px ;
             color:rgb(${frog.rgb[0]},${frog.rgb[1]},${frog.rgb[2]})" 
             data-id=${frog.id} class="fas fa-frog ">
             </i></div>`)


        }
    }


    return {
        renderFrogs: renderFrogs
    }


}