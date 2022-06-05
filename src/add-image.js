import kiwi from './kiwi.jpg';
function addImage() {
    const imgElement = document.createElement('img');
    imgElement.src = kiwi;
    imgElement.alt = "kiwi";
    imgElement.width = 300;
    document.querySelector('body').appendChild(imgElement);
}

export default addImage;