function toevoegen() {
    var lijst = document.getElementById("shoppingList");
    for (var i = 0; i < 1; i++){
        var text = $('input#text').val();
        var node = document.createElement("li");
        var input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", i);
        var textnode = document.createTextNode(text);
        node.appendChild(input);
        node.appendChild(textnode);
        document.getElementById("shoppingList").appendChild(node);
    }

}
function verwijderen() {
    var verwijderen = document.getElementById('verwijderen');

    verwijderen.addEventListener('click', function(){
        var rmvCheckBoxes = document.getElementById('i');

        for(var i = 0; i < 1; i++)
        {
            if(rmvCheckBoxes[i].checked)
            {
                removeElm(rmvCheckBoxes[i]);
            }
        }
    });

    function removeElm(elm){
        elm.parentElement.removeChild(elm);
    }

}