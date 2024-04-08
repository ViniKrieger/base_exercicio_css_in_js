import styled from 'styled-components'

export const Formulario = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-widht: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const TituloHero = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-widht: 768px) {
    font-size: 32px;
  }
`
