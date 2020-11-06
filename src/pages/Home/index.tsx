import React, { useState, useCallback } from 'react';
import { FiPlay, FiArrowRight, FiCopy } from 'react-icons/fi';

import Sidebar from '../../components/Sidebar';

import ImageTeste from '../../assets/teste.png';

import {
  Container,
  Content,
  SectionVenda,
  ContentAfter,
  ContentRight,
} from './styles';

const Home: React.FC = () => {
  const [generateLink, setGenerateLink] = useState('');

  const handleAddLink = useCallback(() => {
    setGenerateLink(`http://teste.${String(Date.now())}`);
  }, []);

  return (
    <Container>
      <Sidebar />
      <Content>
        <div>
          <img src={ImageTeste} alt="Imagem de teste" />
          <div>
            <div>
              <FiPlay size={25} />
              <h1>Assista agora</h1>
            </div>
            <FiArrowRight size={25} />
          </div>
        </div>
        <h2>Preparando seu link de venda</h2>
        <SectionVenda>
          <ContentAfter>
            <div>
              <input placeholder="Nome do Aluno" />
              <input className="w100" placeholder="Nome do Aluno" />
              <select>
                <option value="">Gestão Comercial</option>
                <option value="">Gestão Comercial</option>
                <option value="">Gestão Comercial</option>
              </select>
              <input className="w100" placeholder="Nome do Aluno" />
            </div>
            <div>
              <h1>Gestão comercial</h1>
              <p>
                Pronto para encarar o mercado competitivo? <br />
                Vem logo para a Gestão Comercial!
              </p>
            </div>

            <div>
              <button onClick={handleAddLink} type="button">
                Gerar Link
              </button>
              <div>
                <input disabled placeholder={generateLink} />
                <FiCopy />
              </div>
            </div>
            <p>
              Este é seu link exclusivo. Envie para seu cliente para fechar sua
              venda. <br /> <br />
              Somente as assinatuas realizadas por este link serão consideradas
              na sua conta
            </p>
          </ContentAfter>
          <ContentRight>
            <div>
              <h2>Resultado</h2>
              <select>
                <option>09.09 a 15.09</option>
                <option>09.09 a 15.09</option>
                <option>09.09 a 15.09</option>
              </select>
            </div>
            <h2>
              <span>20</span> Vendedores
            </h2>
            <h2>
              <span>37</span> Vendas
            </h2>
          </ContentRight>
        </SectionVenda>
      </Content>
    </Container>
  );
};

export default Home;
