const colorGenerator = () => {

    let randomColor = (Math.floor(Math.random() * 0xFFFFFF)).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
    let text = document.querySelector('#code');
    text.innerText = '#' + randomColor;
}
colorGenerator()