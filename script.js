let carrinho = [];

function adicionarCarrinho(nome, preco) {
    carrinho.push({nome, preco});
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById('listaCarrinho');
    lista.innerHTML = '';
    let total = 0;
    carrinho.forEach((item, index) => {
        total += item.preco;
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$${item.preco}`;
        lista.appendChild(li);
    });
    document.getElementById('total').textContent = total;
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    alert("Compra finalizada! Total: R$" + document.getElementById('total').textContent);
    carrinho = [];
    atualizarCarrinho();
}

// Formulário de pedido
document.getElementById('formPedido').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Pedido enviado com sucesso!");
    this.reset();
});
