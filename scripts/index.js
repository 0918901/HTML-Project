var lijst = document.getElementById("shoppingList");


function toevoegen() {
    for (var i = 0; i < 1; i++){
        var text = $('input#text').val();
        var node = document.createElement("li");
        var input = document.createElement("input");
        var textnode = document.createTextNode(text);
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", text);
        node.appendChild(input);
        node.appendChild(textnode);
        document.getElementById("shoppingList").appendChild(node);
    }

}
function verwijderen() {
    var myNodelist = document.getElementsByTagName("li");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        myNodelist[i].remove();
    }
}
