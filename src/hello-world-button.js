import './hello-world-button.css';
class HelloWorldButton {
    
    render() {
        const btn = document.createElement('button');
        btn.innerHTML = "hello world";
        btn.classList.add('hello-world-button');
        document.querySelector('body').appendChild(btn);
        btn.addEventListener('click', (event) => {
            const p = document.createElement('p');
            p.innerHTML = "Hello World";
            p.classList.add('hello-world-text');
            document.querySelector('body').appendChild(p);
        })
    }
}

export default HelloWorldButton;