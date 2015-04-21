// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var results = [];
  var findElement = function(node){
  var classes = node.classList;
    if (node.length > 0) { 	
      for (var i = 0; i < node.length; i++) {
      	if (!(node[i].classList === undefined)){
      	  findElement(node[i]);
      	}
      }	
    } else {
      if (classes){
        if (classes.contains(className)) {
          results.push(node);
        }
      }
      if (node.childNodes) {
        findElement(node.childNodes);
      }
    }
  }
    findElement(document.body);
    return results;
};
