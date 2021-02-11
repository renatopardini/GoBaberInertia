import React, { useState, useCallback, useRef } from 'react'
import { Container } from './styled'

const Input = ({ register, icon: Icon, ...props }) => {
    const inputRef = useRef(null);
    const teste = () => {
        return inputRef
    }

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false)

        setIsFilled(inputRef.current?.value)

    }, [])

    return (
        <Container isFilled={isFilled} isFocused={isFocused}>
            { Icon && <Icon size={20} /> }
            <input onFocus={() => setIsFocused(true)} onBlur={handleInputBlur} ref={teste()} {...props}/>
        </Container>
    )
}

export default Input;