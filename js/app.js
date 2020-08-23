/*************************************
SETUPS
*************************************/
const app = {}
///CACHING
app.volumeContent = $('#volumeContent');
app.volumeParent = $('#volumeParent');
app.designOne = $('.designOnlyOne');
///GLOBALS
app.volumeNum = 1
app.numDesigns = 3

///VOLUME CLICK FUNCTION
app.volume = function() {
    app.volumeParent.on('click', function(){
        if(app.volumeNum < app.numDesigns){
          app.volumeNum++  
        } else {
            app.volumeNum = 1
        }
        app.volumeContent.text(`Vol. ${app.volumeNum}`)

        if(app.volumeNum === 2){
            app.designOne.addClass('volume2');
        } else if(app.volumeNum === 3) {
            app.designOne.removeClass('volume2').addClass('volume3');
        } else {
            app.designOne.removeClass('volume3');
        }
    })
}

//VOLUME NUMBER CHANGES


///INIT
app.init = function() {
    app.volume();
}

///DOCUMENT READY
$(function(){
    app.init();
    console.log('Fancy seeing you here. If you want to try something more fun, try clicking the Vol. number');
})