import React from 'react'
import { Container } from './styled'

const Button = ({children, ...props}) => {
    return (
        <Container type="button" {...props}>
            {children}
        </Container>
    )
}

export default Button;