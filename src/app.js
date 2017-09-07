import './style.scss';
import './test.js';

function component () {
    let element = document.createElement('div');

    element.innerHTML = 'Hello Webpack';
    element.classList.add('hello');

    let str1 = { a: 1, b: 2 };
    let { a } = str1;

    [1, 2, 3].map((n) => n + 1);

    console.log(a);

    return element;
}

document.body.appendChild(component());
