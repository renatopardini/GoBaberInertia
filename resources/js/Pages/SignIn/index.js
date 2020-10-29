import React from 'react'
import Layout from '@/Shared/Layout'

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import logoImg from '../../Assets/logo.svg'

import Input from '../../Components/Input'
import Button from '../../Components/Button'

import { Container, Content, Background } from './styles'

const SignIn = () => (
    <Layout>
        <Container>
            <Content>
                <img src={logoImg} title="GoBarber" />

                <form>
                    <h1>Faça seu logon</h1>

                    <Input name="email" icon={FiMail} type="text" placeholder="E-mail"/>
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

                    <Button type="submit">Entrar</Button>

                    <a href="forgot">Esqueci minha senha</a>
                </form>

                <a href="">
                    <FiLogIn/>
                    Criar conta
                </a>
            </Content>
            <Background/>
        </Container>
    </Layout>
)

export default SignIn;