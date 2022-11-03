function addElement(){
  var nodeList = document.getElementsByTagName("li");
  var li = document.createElement("li");
  var inputValue = document.getElementById("input1").value;
  var t = document.createTextNode(inputValue);
  var check = document.createElement("input");
  var nr = nodeList.length + 1;

  check.setAttribute("type", "checkbox");
  check.setAttribute("id", "check" + nr.toString());
  li.setAttribute("id", "li" + nr.toString());
  li.setAttribute("onclick", "checked(this)");

  li.appendChild(check);
  li.appendChild(t);

  if (inputValue === '') {
    alert("Nothing to add")
  } else {
      document.getElementById('list').appendChild(li);
  }
}

function checked(obj){
  var checkBox = obj.getElementsByTagName("input");

  if (obj.getAttribute("style") != null && obj.getAttribute("style").toString() == "text-decoration:line-through"){
    obj.setAttribute("style", "");
  }
  else {
    obj.setAttribute("style", "text-decoration:line-through");
  }
}
