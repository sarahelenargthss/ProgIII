var lista = document.getElementById("lista");

for (var i = 0; i < 10; i += 1) {
    var item = document.createElement("LI");
    var textnode = document.createTextNode("Item " + i.toString());
    item.appendChild(textnode);
    lista.appendChild(item);
}