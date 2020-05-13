import React from 'react'
import ReactDom from 'react-dom'
//import PrimeiroComponente from "./componentes/PrimeiroComponente"
//import { CompA, CompB } from './componentes/SegundoComponente'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaVilella from './componentes/FamilaVilella'
import Famila from "./componentes/Familia" 
import Membro from "./componentes/Membro"

const elemento = document.getElementById('root')
ReactDom.render(
        <div>
            <Famila sobrenome="Vilella">
                <Membro nome="Felipe"/>
            </Famila>
            {/*<FamiliaVilella/>*/}
            {/*<CompA valor = "Olá eu sou A"/>*/}
            {/*<CompB valor = "Olá eu sou B"/>*/}
            {/*<MultiElementos/>*/}
            {/*<PrimeiroComponente valor="bom dia"/>*/}
        </div>
, elemento)
