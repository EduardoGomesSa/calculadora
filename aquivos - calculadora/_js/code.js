var num = 0;
function calculadora(n){
    num = num + n;
    mostrar(num)
}
function mostrar(r){
    var visualizar = document.getElementById('resultado')
    var tela = r;
    
    visualizar.innerHTML = tela;
}