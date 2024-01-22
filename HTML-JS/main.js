const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.lenght >=2;
}

form.addEventListener('submit' ,function(e) {
    e.preventDefault();

    const numeroContaBeneficiario  = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente: ${valorDeposito.value} - conta: ${numeroContaBeneficiario}`;
    formEValido = validaNome(nomeBeneficiario.value)    
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';    
        
        nomeBeneficiario.value = ' ';
        numeroContaBeneficiario.value = ' ';
        valorDeposito.value = ' ';
    } else {
        nomeBeneficiario.sytle.border = '1pix solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})    

nomeBeneficiario.addEventListener('keyup', function(e) {
        console.log(e.target.value);
        formEValido = validaNome(e.target.value);

        if (!formEValido) {
            nomeBeneficiario.classList.add('error');
            document.querySelector('.error-message').style.display = 'block';
        } else {
            nomeBeneficiario.classList.remove('error');
            document.querySelector('.error-message').style.display = 'none';
        }
    })
