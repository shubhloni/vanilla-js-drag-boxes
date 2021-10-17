const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

function dragStart() {
  console.log('Drag start');
  this.classList.add('hold');
  setTimeout(() => {
    // this.classList.remove('fill');
    this.className = 'invisible';
  }, 10);
}

// Arrow function
dragEnd = (obj) => {
  return () => {
    obj.className = 'fill';
  };
};

dragEnter = (obj) => {
  return (e) => {
    e.preventDefault();
    obj.classList.add('hovered');
  };
};

function dragLeave() {
  this.className = 'empty';
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop(e) {
  // Way one: Traditional : Doesn't work as expected since it  creates new fill element each time
  // empties.forEach((empty) => {
  //   empty.innerHTML = '';
  //   empty.className = 'empty';
  // });
  // e.target.innerHTML = `<div class="fill" draggable="true"></div>`;

  // Way two: Modern JS : Doesn't create new fill element. Uses existing and appends  to dropable div
  this.className = 'empty';
  this.append(fill);
}

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd(fill));

empties.forEach((empty) => {
  empty.addEventListener('dragenter', dragEnter(empty));
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('drop', dragDrop);
});
