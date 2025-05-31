const Redux = require('redux')
const { createStore, combineReducers} = Redux
//escrever função criadora de ação
//produz uma ação que representa a criação de um novo contrato

const criarContrato = (nome, taxa) => {
    return{
        type: "CRIAR_CONTRATO",
        payload: {
            nome, 
            taxa
        }    
    }
}

//escrever nova função criadora de ação
//produz uma ação que representa o cancelamento de um novo contrato, 
//dado um nome
const cancelarContrato = (nome) => {
    return{
        type: "CANCELAR_CONTRATO",
        payload: {
            nome
        }    
    }
}

//escrever nova função criadora de ação

const solicitarCashback = (nome, valor) => {
    return{
        type:"SOLICITAR_CASHBACK",
        payload: {
            nome,
            valor
        }
    }
}


const pedidosCashback = (sliceCashback = [], solicitacao ) => {
    if (solicitacao.type === "SOLICITAR_CASHBACK"){
        return [...sliceCashback, solicitacao.payload]
    }
    return sliceCashback
}

const departamentoCaixa = ( slice = 0, solicitacao) => {
    return (solicitacao.type === "SOLICITAR_CASHBACK") 
            ? slice - solicitacao.payload.valor
            :
            (solicitacao.type === "CRIAR_CONTRATO")
                ? slice + solicitacao.payload.taxa
                : 
                (solicitacao.type === "CANCELAR_CONTRATO")
                ? slice + 500
                :slice
}

const novosConstratos = (sliceContratos = [], solicitacao) => {
    return (solicitacao.type === "CRIAR_CONTRATO")
            ? [...sliceContratos, solicitacao.payload]
            : (solicitacao.type === "CANCELAR_CONTRATO")
                ?  sliceContratos.filter(contrato => contrato.nome !== solicitacao.payload.nome)
                :sliceContratos
}

const todosOsReducers = combineReducers({
    pedidosCashback,
    departamentoCaixa,
    novosConstratos
    
})

const store = createStore(todosOsReducers)

store.subscribe(() => {
    console.log('Estado atual:', JSON.stringify(store.getState()));

});
store.dispatch(criarContrato('José', 50));
store.dispatch(criarContrato('Maria', 100));
store.dispatch(solicitarCashback('José', 10));
store.dispatch(cancelarContrato('Maria', 20));
store.dispatch(cancelarContrato('Maria'));