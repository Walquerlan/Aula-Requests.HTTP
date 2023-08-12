
const ListarProdutos = () => {
    try {
    fetch('https://fakestoreapi.com/products')
    .then(resposta => resposta.json())
    .then(listaDeProdutos => {
      listaDeProdutos.map(ítem => {
        produtos.innerHTML += `
        <li>
        <div class="image">
            <span>
                <box-icon type='solid' name='heart'></box-icon>
                ${ítem.rating.rate}
            </span>
            <img src="${ítem.image}" alt="">
        </div>
        <img src="" alt="">
        <h4>${ítem.title}</h4>
        <h5>${ítem.category}</h5>
        <p>${ítem.description}</p>
        <h6>${ítem.price}</h6>
        <a href="">Comprar</a>
    </li>`;
      })
    })
    } catch (error) {
        alert(`Error: ${error.messager}`);
    }
}

ListarProdutos ();

const listarCategorias = () => {
    try {
        fetch('https://fakestoreapi.com/products')
        .then(resposta => resposta.json())
        .then(listaDeCategorias => {
            listaDeCategorias.map(item => {
                FileSystemDirectoryHandle.innerHTML += `<option>${item}</option>`;
            });
        }
    } catch(error) {
        alert(`erro: ${error.message}`)
    }
}