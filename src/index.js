var ListarProdutos = function () {
    try {
        fetch('https://fakestoreapi.com/products')
            .then(function (resposta) { return resposta.json(); })
            .then(function (listaDeProdutos) {
            listaDeProdutos.map(function (ítem) {
                produtos.innerHTML += "\n        <li>\n        <div class=\"image\">\n            <span>\n                <box-icon type='solid' name='heart'></box-icon>\n                ".concat(ítem.rating.rate, "\n            </span>\n            <img src=\"").concat(ítem.image, "\" alt=\"\">\n        </div>\n        <img src=\"\" alt=\"\">\n        <h4>").concat(ítem.title, "</h4>\n        <h5>").concat(ítem.category, "</h5>\n        <p>").concat(ítem.description, "</p>\n        <h6>").concat(ítem.price, "</h6>\n        <a href=\"\">Comprar</a>\n    </li>");
            });
        });
    }
    catch (error) {
        alert("Error: ".concat(error.messager));
    }
};
ListarProdutos();
