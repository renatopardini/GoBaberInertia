import React from 'react'
import Global from '@/Styled/Global'

export default ({ children }) => (
    <React.Fragment>
        <Global />
        {children}
    </React.Fragment>
)
