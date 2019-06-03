/* texto bases 
    #cartagena #cartagenamakeup #maquillajeencolombia #maquillajecolombia #maquillajesencolombia #belleza #maquillajeenventa #maquillajesenventa #maquillajecartagena #maquillajescartagena #maquillajeprofesional #maquillajesalmayor
    #makeupventa #makeupcartagena #makeupcolombia #maquillajenatural #maquillajedeojos
    #maquillajebogota #maquillajesbogota #colombiamakeup
*/

// CAPTURAR DATOS 
const showHas = () => {
    let hName = document.getElementById('hName').value;

    let createText = document.createTextNode('#' + hName + ' #' + hName + 'cartagena ' + ' #' + hName + 'colombia ' + ' #' + hName + 'bogota ' + ' #cartagena #cartagenamakeup #maquillajeencolombia #maquillajecolombia #maquillajesencolombia #belleza #maquillajeenventa #maquillajesenventa #maquillajecartagena #maquillajescartagena #maquillajeprofesional #maquillajesalmayor #makeupventa #makeupcartagena #makeupcolombia #maquillajenatural #maquillajedeojos #maquillajebogota #maquillajesbogota #colombiamakeup');

    const area = document.getElementById('area');
    area.append(createText);

}

const copyText = (campo) => {
    let copy = campo;
    copy.select();
    document.execCommand('copy');
}

const clearInputs = () => {
    document.getElementById('area').value = '';
    document.getElementById('hName').value = '';
}

const btnCrear = document.getElementById('crear');
btnCrear.addEventListener('click', showHas);


const btnClear = document.getElementById('clear');
btnClear.addEventListener('click', clearInputs);