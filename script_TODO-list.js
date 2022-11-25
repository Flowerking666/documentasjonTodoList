var conTasks = 0;
var nr = 0; 

function addElement(){
  var nodeList = document.getElementsByTagName("li");
  var li = document.createElement("li");
  var inputValue = document.getElementById("input1").value;
  var t = document.createTextNode(inputValue);
  var check = document.createElement("input");
  
  nr = nodeList.length + 1; 
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
  document.getElementById("teller").innerHTML = conTasks+" / "+nr;
}

function checked(obj){
  var checkBox = obj.getElementsByTagName("input");

  if (obj.getAttribute("style") != null && obj.getAttribute("style").toString() == "text-decoration:line-through"){
    obj.setAttribute("style", "");
  }
  else {
    obj.setAttribute("style", "text-decoration:line-through");
  }
  if (checkBox[0].checked == true){
    conTasks = conTasks + 1;
  } else {
    conTasks = conTasks - 1;
  }
  document.getElementById("teller").innerHTML = conTasks+" / "+nr;
}
//
window.onload = function() {
  document.getElementById("input1").focus();
};