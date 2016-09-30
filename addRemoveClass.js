var parent, elementGroup;
parent = '.li-group li';
elementGroup = document.querySelectorAll(parent);

var addRemoveClassName = function () {
    for (var i = 0; i < elementGroup.length; i++)
        elementGroup[i].classList.remove('current');    
    this.classList.add('current');
};

for (var i = 0; i < elementGroup.length; i++)
    elementGroup[i].addEventListener('click', addRemoveClassName);