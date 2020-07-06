import React from 'react'
import ReactDom from 'react-dom'
//import PrimeiroComponente from "./componentes/PrimeiroComponente"
//import { CompA, CompB } from './componentes/SegundoComponente'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaVilella from './componentes/FamilaVilella'
// import Famila from "./componentes/Familia" 
// import Membro from "./componentes/Membro"
// import ComponenteComFuncao from "./componentes/ComponenteComFuncao"

// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
import Contador from './componentes/Contador'
const elemento = document.getElementById('root')
ReactDom.render(
        <div>
            <Contador numero={0}/>
            {/* <ComponenteClasse valor="Sou um componente de classe"/> */}
            {/* <Pai/> */}
            {/* <ComponenteComFuncao/> */}
            {/* <Famila sobrenome="Vilella">
                <Membro nome="Felipe"/>
                <Membro nome="Julia"/>
            </Famila> */}
            {/*<FamiliaVilella/>*/}
            {/*<CompA valor = "Olá eu sou A"/>*/}
            {/*<CompB valor = "Olá eu sou B"/>*/}
            {/*<MultiElementos/>*/}
            {/*<PrimeiroComponente valor="bom dia"/>*/}
        </div>
, elemento)
