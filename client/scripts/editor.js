function getText(el) {
    var ret = " ";
    var length = el.childNodes.length;
    for(var i = 0; i < length; i++) {
        var node = el.childNodes[i];
        if(node.nodeType != 8) {
            if(node.nodeType != 1) {
                ret += node.nodeValue;
            }else{
                ret += getText(node);
            }
        }
    }
}