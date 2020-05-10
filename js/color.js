function colorFg() {
  var colorFg1 = document.getElementById("colorFg").value;
  frame.style.color = colorFg1;
}

function colorBg() {
  var canvas = document.getElementById("labelDesigner");
  var colorBg1 = document.getElementById("colorBg").value;
  canvas.style.backgroundColor = colorBg1;
}
