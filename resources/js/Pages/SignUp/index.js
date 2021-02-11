import React from 'react'
import Layout from '@/Shared/Layout'

import { useForm } from "react-hook-form"

import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'
import logoImg from '../../Assets/logo.svg'

import Input from '../../Components/Input'
import Button from '../../Components/Button'

import { Container, Content, Background } from './styles'

const SignUp = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data);

    return (
        <Layout>
            <Container>
                <Background/>
                <Content>
                    <img src={logoImg} title="GoBarber" />

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Faça seu cadastro</h1>

                        <Input name="name" icon={FiUser} register={register} type="text" placeholder="Nome"/>
                        <Input name="email" icon={FiMail} register={register} type="text" placeholder="E-mail"/>
                        <Input name="password" icon={FiLock} register={register} type="password" placeholder="Senha"/>

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
}

export default SignUp;