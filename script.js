function converter() {
   let base = Number(select_base.value);
   let valor = ipt_numero.value;

    if (!base || valor == "") {
        alert("Por favor, selecione uma base e digite um número.");
        return;
    }

    // Converte o valor da base selecionada para um número decimal real
    let decimal = parseInt(valor, base);

    if (isNaN(decimal)) {
        alert("O número digitado é inválido para a base selecionada.");
    } else {
        // Exibe os resultados convertendo do decimal para as outras bases
        res_dec.innerHTML = decimal.toString(10);
        res_bin.innerHTML = decimal.toString(2);
        res_oct.innerHTML = decimal.toString(8);
        res_hexa.innerHTML = decimal.toString(16).toUpperCase();
    }
}
