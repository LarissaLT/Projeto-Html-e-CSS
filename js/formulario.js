function votacao(){

    const formData = {};
    formData["nome"] = document.getElementById("nome").value;
    formData["email"] = document.getElementById("email").value;
    formData["comentario"] = document.getElementById("comentario").value;
    formData["colecao"] = document.getElementById("colecao").value;
    formData["aroma"] = getRadioBtnValue(document.getElementsByName('aroma'));

    const link = createWappLink(formData, "5521979562636");

    console.log(formData)
    
    window.open(link,'_blank').focus();
}

function getRadioBtnValue(radioOptions) {

    let result;
    const filtered = Array.from(radioOptions).filter(el => el.checked);
        if (filtered.length !== 0) {
            result = filtered[0].value;
        } else {
            result = "valor não selecionado";
        }
    return result;
}

function createWappLink(formData, telefone) {
    const basePath = `https://wa.me/${telefone}`;
    const msg = `?text= Nome: ${formData.nome} %0a Email: ${formData.email} %0a Comentário: ${formData.comentario} %0a Coleção Favorita: ${formData.colecao} %0a Aroma Favorito: ${formData.aroma}`;
    return basePath + msg;
}
