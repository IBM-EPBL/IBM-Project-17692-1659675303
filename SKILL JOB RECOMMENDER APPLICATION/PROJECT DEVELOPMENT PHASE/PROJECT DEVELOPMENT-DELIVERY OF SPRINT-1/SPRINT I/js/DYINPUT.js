var fieldId = 0;
 
function addElement(parentId, elementTag, elementId, html){
    var id = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    id.appendChild(newElement);
 
}
 
function removeField(elementId){
    var fieldId = "field-"+elementId;
    var element = document.getElementById(fieldId);
    element.parentNode.removeChild(element);
}
 
function addField(){

    fieldId++;
    var html = '</br><input type="text" name="form[]" class="form-control1" placeholder="Enter some text">' + '<button class="btn btn-danger" onclick="removeField('+fieldId+');"><span class="glyphicon glyphicon-minus"></span></button><br>';
    addElement('forms1', 'div', 'field-'+ fieldId, html);
}