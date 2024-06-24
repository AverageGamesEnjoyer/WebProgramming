const tree = document.getElementById('tree');
tree.addEventListener('click', function(event) {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const mainDiv = event.target.closest('div');
  const childDiv = mainDiv.querySelector('.sub-tree');
  if (!childDiv) {
    return;
  }

  childDiv.hidden = !childDiv.hidden;
});