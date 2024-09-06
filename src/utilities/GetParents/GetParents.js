export default function GetParents(el, selector, filter) {
  // If no selector defined, will bubble up all the way to *document*
  let parentSelector = (selector === undefined) ? document : document.querySelector(selector);
  var parents = [];
  var pNode = el?.parentNode;

  while (pNode !== parentSelector) {
    var element = pNode;

    if (element) { // Check if element is defined
      if (filter === undefined) {
        parents.push(element); // Push the parentSelector you wanted to stop at
      } else {
        if (element.classList && element.classList.contains(filter)) { // Check if classList exists and contains method is available
          parents.push(element);
        }
      }
      pNode = element?.parentNode;
    } else {
      break; // Exit loop if element is undefined
    }
  }

  return parents;
}
