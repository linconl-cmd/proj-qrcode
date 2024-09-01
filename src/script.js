const container = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
generatoBtn = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code img');

generatoBtn.addEventListener('click', () => {
    let qrValue =  qrInput.value;
    if(!qrValue){
        alert('Insira uma URL ou texto para gerar um Qr Code')
        return;
    }

    generatoBtn.innerText = 'Gerando um Qr Code...'
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener('load', () => {
        generatoBtn.innerText = 'Gerar QR Code';
        container.classList.add('active');
    });
});

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value){
        container.classList.remove('active');
    }
});