function toggle(elm, id) {
    var e = document.getElementById(id),
        a = elm.getElementsByTagName('span')[0];
  
  
    if (e.style.display == 'none')
    {
      e.style.display = '';
      a.innerHTML = '&#9650;';
    }
    else
    {
      e.style.display = 'none';
      a.innerHTML = '&#9658;';
    }
  }