setTimeout( function() {
    function changeColor(eleId, colorValue) {
    const box = document.getElementById(eleId);
    box.setAttribute('color', colorValue);
  }
  changeColor("liquid", 'red')
  }, 7000)