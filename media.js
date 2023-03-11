function calcularMedia() {

    const url = new URLSearchParams(window.location.search) //captura a url e armazena na variavel url
    let nota1 = url.get("n1") //a partir da url eu capturo somente o valor do n1 que veio do index html
    let nota2 = url.get("n2") //a partir da url eu capturo somente o valor do n2 que veio do index html

    let media = ((Number(nota1)) + (Number(nota2))) / 2

    document.getElementById("media").value = media //Jogar o valor calculado da média no inpud da média

    //comparar a média para dizer se está aprovaod ou reprovado.
    if (media >= 6) {
        document.getElementById("status").innerHTML = "Aprovado" //jogando o texto aprovado na tag span
        document.getElementById("status").style.color = "green" //trocando a cor do texto da tag span
    } else {
        document.getElementById("status").innerHTML = "Reprovado" //jogando o texto aprovado na tag span
        document.getElementById("status").style.color = "red" //trocando a cor do texto da tag span
    }
}