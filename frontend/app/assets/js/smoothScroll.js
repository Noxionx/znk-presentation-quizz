document.addEventListener('DOMContentLoaded', () => {
  function scrollTo (y) {
    window.scroll({
      top: y,
      left: 0,
      behavior: 'smooth',
    });
  }
  function scrollToId (id) {
    const elt = document.getElementById(id);
    if (elt) {
      scrollTo(elt.offsetTop);
    }
  }


  const viewsId = ['main', 'q1', 'q2', 'q3'];
  const viewsElt = viewsId.map(id => document.getElementById(id));
  const viewsPos = viewsElt.map(elt => elt.offsetTop);

  const moveBtn = document.querySelectorAll('.go-up, .go-down');
  moveBtn.forEach((elt) => {
    elt.addEventListener('click', (e) => {
      e.preventDefault();
      const target = elt.getAttribute('data-href');
      if (target) {
        scrollToId(target);
      }
    });
  });

  document.addEventListener('mousewheel', (e) => {
    e.preventDefault();
    let viewIndex = 0;
    while (window.pageYOffset > viewsPos[viewIndex]) {
      viewIndex += 1;
    }
    if (e.deltaY > 0) {
      // Go down
      if (viewIndex < (viewsPos.length - 1)) {
        scrollTo(viewsPos[viewIndex + 1]);
      }
    } else if (viewIndex > 0) {
      scrollTo(viewsPos[viewIndex - 1]);
    }
  });
});
