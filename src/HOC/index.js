import React from 'react'
import Header from './Components/header';
import Footer from './Components/footer';
import { Container,PageLayout } from "./styles";

export default function index(WrappedComponent) {
  return (
    <Container>
        <Header/>
        <PageLayout>
            {<WrappedComponent/>}
        </PageLayout>
        <Footer/>
    </Container>
  )
}
