import React from 'react'
import Layout from '@/Shared/Layout'

import { InertiaLink } from '@inertiajs/inertia-react'
import route from 'ziggy'

export default () => (
    <Layout>
        <div>
            <strong>Hello Inertia</strong>
            <br />
            <InertiaLink href={route('contato')}>Contato</InertiaLink>
        </div>
    </Layout>
)
