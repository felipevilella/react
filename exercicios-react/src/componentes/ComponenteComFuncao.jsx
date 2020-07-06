import React from 'react'

export default props => {
    const aprovados = ['Paula', 'Fernanda', 'Julia', 'Xelia']
    const gerarIntens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarIntens(aprovados)}
        </ul>
    )
}
