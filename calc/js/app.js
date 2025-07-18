const parentTag = <h1 onClick={() => console.log('Hello!')}>Hello!</h1>;
const wrapper = document.querySelector('.wrapper');

ReactDOM.render(parentTag, wrapper);

// const mainElement = document.querySelector('.wrapper');
// mainElement.innerHTML = '<h1>Hello!</h1>';

// mainElement.insertAdjacentHTML('afterend', `<h1>Hello</h1>`);
