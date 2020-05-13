import React from 'react'

export default props =>
    <div>
        <h1>Famila</h1>
        {React.cloneElement(props.children, props)}
        {/*props.children*/}
    </div>