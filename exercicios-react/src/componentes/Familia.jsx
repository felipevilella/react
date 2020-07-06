import React from 'react'
import {filhosComProps} from  '../utils/utils'

export default props =>
    <div>
        <h1>Famila</h1>
        {filhosComProps(props)}
        
        {/* {React.cloneElement(props.children, props)} */}
        {/*props.children*/}
    </div>