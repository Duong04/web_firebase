import Navigo from 'navigo';

const router = new Navigo("/");

const render = (content, target) => {
    target.innerHTML = content;
}

export {render, router};