document.addEventListener("DOMContentLoaded", function(event) {

  function scrollTo (y) {
    window.scroll({
      top: y,
      left: 0,
      behavior: 'smooth'
    });
  }
  function scrollToId (id) {
    var elt = document.getElementById(id);
    if (elt) {
      scrollTo(elt.offsetTop);
    }
  }


  var viewsId = ['main', 'q1', 'q2', 'q3'];
  var viewsElt = viewsId.map(function(id){
    return document.getElementById(id);
  });
  var viewsPos = viewsElt.map(function(elt){
    return elt.offsetTop;
  })

  var moveBtn = document.querySelectorAll('.go-up, .go-down');
  moveBtn.forEach(function(elt){
    elt.addEventListener('click', function(e){
      e.preventDefault;
      var target = elt.getAttribute('data-href');
      if (target) {
        scrollToId(target);
      }
    })
  })

  document.addEventListener('mousewheel', function(e){
    e.preventDefault();
    var viewIndex = 0;
    while (window.pageYOffset > viewsPos[viewIndex]) {
      viewIndex ++;
    }
    if (e.deltaY > 0) {
      // Go down
      if (viewIndex < (viewsPos.length - 1)) {
        scrollTo(viewsPos[viewIndex + 1]);
      }
    } else {
      // Go up
      if (viewIndex > 0) {
        scrollTo(viewsPos[viewIndex - 1]);
      }
    }
  });
});
