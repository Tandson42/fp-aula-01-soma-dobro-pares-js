/**
 * Módulo para implementar funções matemáticas.
 */

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem funcional com o modelo map/reduce.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesFuncional(numeros){
    // TODO: Insira seu código funcional aqui
    const somaQuadradosPares = numeros.filter(numero => numero % 2 === 0) 
                                        .map      (numero => numero * 2) 
                                        .reduce   ((soma, numero) => soma + numero, 0);
    return somaQuadradosPares;                            
}

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem estruturada (procedural) convencional.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesProcedural(numeros){
    // TODO: Insira seu código estruturado aqui   
    let somaQuadradosPares = 0;

    for(let i = 0; i< numeros.length; i++){
        if(numeros[i] % 2 === 0){
            somaQuadradosPares = somaQuadradosPares + numeros[i] *2;
        }
    }
    return somaQuadradosPares;
}

export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };
