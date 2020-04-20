const DomElement = function(){

this.selector = '';
this.height = '';
this.width = '';
this.bg = '';
this.fontSize = '';

};

DomElement.prototype.addElem = function (selector, height, width, bg, fontSize) {
    const bodyPage = document.querySelector('body');
    if(selector){
    selector = selector.trim();
    let elem;
    if(selector.startsWith('#'))
    {
        elem = document.createElement('h1');
        elem.textContent = 'H1';
        elem.id = selector.substr(1);
    } else if (selector.startsWith('.')) {
        elem = document.createElement('div');
        elem.textContent = 'DIV';
        elem.classList.add(selector.substr(1));
    }
    elem.style.height = height;
    elem.style.width = width;
    elem.style.background = bg;
    elem.style.fontSize = fontSize;
    bodyPage.append(elem);
    } else {
        alert('nothing');
    }

};

const domElemm = new DomElement();

domElemm.addElem('#black', '100px', '100px', 'blue','small');
domElemm.addElem('.black','', '', '','x-large');

