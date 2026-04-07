function Exercicio5(){

    let quantidade= Number(document.getElementById("quantidade").value);
    let preco= Number(document.getElementById("preco").value);

    let subtotal = quantidade * preco;
    let desconto= subtotal * 0.10;
    let total = subtotal-desconto;
    
    document.getElementById("resultado").innerHTML = "Subtotal: R$ "+ subtotal + "<br>" + "Desconto (10%): R$ "+ desconto + "<br>"+ "Total a pagar: R$ "+ total;
    
    }