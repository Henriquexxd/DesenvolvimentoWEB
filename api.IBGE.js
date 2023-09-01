const loadCidade = async () =>{
    const url ='http://servicodados.ibge.gov.br/api/v1/localidades/estados'
    try{
        const response = await fetch(url);
        const data = await response.json();

       const elementEstado = document.getElementById('estado');
        let elementOption ='';
        for(let estado of data){
            elementOption += `<option value= '${estado.sigla}' id='${estado.id}'>${estado.nome}</option>`;
        console.log(estado.nome);
       }

       elementEstado.insertAdjacentHTML('beforeend', elementOption);

    }catch (error){
        alert("Ops!, algo deu errado")
    }
}
loadCidade();