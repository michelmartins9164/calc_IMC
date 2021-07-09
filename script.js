const btn = document.getElementById('btn');


function calcular() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');
    
    //Verificando se os campos estão preenchidos
    if (nome !== '' && peso !== '' && altura !== '' ) {
        const calcImc = (peso / (altura*altura)).toFixed(2);
        resultado.textContent = calcImc;

        let classificacaoImc = undefined;
        let pesoIdeal = 'peso ideal';

        if (calcImc < 18.5) {
            let classificacaoImc = 'abaixo do peso';
            resultado.textContent = `${nome}, seu IMC é de ${calcImc} e você está ${classificacaoImc}`;
        } else {
            resultado.textContent = `${nome}, seu IMC é de ${calcImc} e você está no seu ${pesoIdeal}`;
        }

        if (calcImc > 18.5 && calcImc < 24.9 ) {
            let classificacaoImc = 'peso normal';
            resultado.textContent = `${nome}, seu IMC é de ${calcImc} e você está no seu ${classificacaoImc}`;
        }

        if (calcImc >= 25.0 && calcImc < 29.9 ) {
            let classificacaoImc = 'sobrepeso';
            resultado.textContent = `${nome}, seu IMC é de ${calcImc} e você está com ${classificacaoImc}`;
        } 

        if (calcImc >= 30.0 && calcImc < 34.9 ) {
            let classificacaoImc = 'obsidade(grau 1)';
            resultado.textContent = `${nome}, seu IMC é de ${calcImc} e você está com ${classificacaoImc}`;
        } 
        if (calcImc >= 35.0 && calcImc < 39.9 ) {
            let classificacaoImc = 'obsidade severa(grau 2)';
            resultado.textContent = `${nome}, seu IMC é de ${calcImc} e você está com ${classificacaoImc}`;
        } 
        if (calcImc >= 40.0) {
            let classificacaoImc = 'obsidade mórbida (grau 3)'
            resultado.textContent = `${nome}, seu IMC é de ${calcImc} e você está com ${classificacaoImc}`;
        } 



        
    } else {
        resultado.textContent = 'Preencha todos os campos por favor';
    }


}

btn.addEventListener('click', calcular)