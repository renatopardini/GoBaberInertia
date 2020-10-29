import React from 'react'
import Layout from '@/Shared/Layout'

import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'
import logoImg from '../../Assets/logo.svg'

import Input from '../../Components/Input'
import Button from '../../Components/Button'

import { Container, Content, Background } from './styles'

const SignUp = () => (
    <Layout>
        <Container>
            <Background/>
            <Content>
                <img src={logoImg} title="GoBarber" />

                <form>
                    <h1>Faça seu cadastro</h1>

                    <Input name="name" icon={FiUser} type="text" placeholder="Nome"/>
                    <Input name="email" icon={FiMail} type="text" placeholder="E-mail"/>
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

                    <Button type="submit">Cadastrar</Button>
                </form>

                <a href="">
                    <FiArrowLeft/>
                    Voltar para logon
                </a>
            </Content>
        </Container>
    </Layout>
)

export default SignUp;