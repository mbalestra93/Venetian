$(document).ready(()=> {

  function galleryOpen(a,b,c){
    a.on("click",() =>{
      b.slideToggle();
      c.hide();
    });
    };

galleryOpen($("#btnReflexes"),$("#galleryReflexes"),$("#galleryFrames"));
galleryOpen($("#btnFrames"),$("#galleryFrames"),$("#galleryReflexes"));





  });
