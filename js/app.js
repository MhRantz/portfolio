/*************************************
SETUPS
*************************************/
const app = {}
///CACHING
app.volumeContent = $('#volumeContent');
app.volumeParent = $('#volumeParent');
app.designOne = $('.designOnlyOne');
app.projectDrop = $('.languagesUsed');
///GLOBALS
app.volumeNum = 1
app.numDesigns = 4

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
            $('body').addClass('volume3');
            $('nav').addClass('volume3');
        } else if(app.volumeNum === 4) {
            app.designOne.removeClass('volume3').addClass('volume4');
            $('body').removeClass('volume3');
            $('nav').removeClass('volume3'); 
        } else {
            app.designOne.removeClass('volume4');
        }
    })
}

//TOGGLE SHOWING PROJECT DETAILS
app.projectDrops = function(){
    app.projectDrop.on('click', function(){
        $(this).siblings('.projectContent').toggle();
    })
}

///INIT
app.init = function() {
    app.volume();
    app.projectDrops();
}



///DOCUMENT READY
$(function(){
    app.init();
    console.log('Fancy seeing you here. If you would like to try something more fun, try clicking the Vol. number');
    app.projectDrop.siblings('.projectContent').hide();
})