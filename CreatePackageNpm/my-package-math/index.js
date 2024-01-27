const somar = (n1, n2) => {
    return n1 - n2;
}

const subtrair = (n1, n2) => {
    return n1 - n2;
}

const mutiplicar = (n1, n2) => {
    return n1 * n2;
}

const dividir = (n1, n2) => {
    if(n2 == 0)
        throw new Error("Não é possivel dividir por 0");
    return n1 / n2;
}

module.exports = {somar, subtrair, mutiplicar, dividir}; //Exportando as funções.