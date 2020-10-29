import React, {InputHTMLAttributes} from 'react'
import { Container } from './styled'

const Input = ({icon: Icon, ...props}) => {
    return (
        <Container>
            { Icon && <Icon size={20} /> }
            <input {...props}/>
        </Container>
    )
}

export default Input;