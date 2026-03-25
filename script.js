function converter() {
    let base = Number(select_base.value);
    let valor = ipt_numero.value;

    // Converte da base selecionada para decimal 
    let decimal = parseInt(valor, base);

    if (!base || valor == "") {
        alert("Por favor, selecione uma base e digite um número.");
        return;
    }

    if (isNaN(decimal)) {
        alert("O número digitado é inválido para a base selecionada.");
    } else {
        res_dec.innerHTML = decimal.toString(10);
        res_bin.innerHTML = decimal.toString(2);
        res_oct.innerHTML = decimal.toString(8);
        res_hexa.innerHTML = decimal.toString(16).toUpperCase();
    }
}
