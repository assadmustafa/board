// Array to store shapes
const shapes = [];

function drawShape() {
  const shapeType = document.getElementById('shapeType').value;
  const mydiv = document.getElementById('mydiv');
  const newShape = document.createElement('div');
  
  newShape.className = 'shape';
  newShape.id = 'shape';

  if (shapeType === 'rectangle') {
    const rectangle = document.createElement('div');
    rectangle.id = 'rectangle';
    rectangle.style.width = '25px';
    rectangle.style.height = '25px';
    rectangle.style.backgroundColor = 'blue';
    newShape.appendChild(rectangle);
  } else if (shapeType === 'circle') {
    const circle = document.createElement('div');
    circle.id = 'circle';
    circle.style.width = '25px';
    circle.style.height = '25px';
    circle.style.backgroundColor = 'greenyellow';
    circle.style.borderRadius = '50%';
    circle.style.boxShadow = '0px 0px 40px 10px greenyellow';
    newShape.appendChild(circle);
  }

  // Make the new shape draggable:
  dragElement(newShape);

  // Add the new shape to the list
  shapes.push(newShape);

  // Append the new shape to the panel
  mydiv.appendChild(newShape);
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    // if target is inside map
    if (pos3 > 660 && pos3 < 1563 && pos4 > 126 && pos4 < 816) {
      document.getElementById('location').innerHTML = "X: " + pos3 + " " + " Y: " + pos4;
      // if target in storage
      if (pos3 > 737 && pos3 <= 1031 && pos4 > 379 && pos4 < 600){
        document.getElementById('location').innerHTML = "storage"
      }
      // if target in entrance
      if (pos3 >= 1215 && pos3 < 1484 && pos4 >= 480 && pos4 < 669){
        document.getElementById('location').innerHTML = "entrance"
        // if target in stairs
        if (pos3 >= 1215 && pos3 < 1280 && pos4 > 403 && pos4 < 595){
          document.getElementById('location').innerHTML = "stairs"
        }
      }
      // if target in office
      if (pos3 >= 1286 && pos3 < 1482 && pos4 > 303 && pos4 < 480){
        document.getElementById('location').innerHTML = "office"
      }
      // if target in dining room
      if (pos3 >= 1032 && pos3 < 1215 && pos4 >= 526 && pos4 < 666) {
        document.getElementById('location').innerHTML = "dining room"
      }
      // if target in kitchen
      if (pos3 > 1024 && pos3 < 1286 && pos4 > 303 && pos4 < 526) {
        document.getElementById('location').innerHTML = "kitchen"
        // if target in stairs
        if (pos3 > 1219 && pos4 > 403) {
          document.getElementById('location').innerHTML = "stairs"
        }
        // if target in WC
        if (pos3 < 1116 && pos4 < 366) {
          document.getElementById('location').innerHTML = "WC"
        }
      }
      // if target in WC
      if (pos3 > 955 && pos3 < 1110 && pos4 > 267 && pos4 < 366) {
        document.getElementById('location').innerHTML = "WC"
      }
    } else {
      document.getElementById('location').innerHTML = "out of range!"
    }
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}