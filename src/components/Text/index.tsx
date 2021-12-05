import { Container, DottedLine, SideDivider, Content } from "./styles";
import { NewQuote } from '../NewQuote'
import { NewImage } from '../NewImage'
import { NewDivider } from '../NewDivider'

import childrenOnChairsImg from '../../assets/children-on-chairs-at-classroom.jpg'
import womanInFrontOfMackbookImg from '../../assets/woman-in-front-of-macbook.jpg'
import boyInBlackShirtImg from '../../assets/boy-in-black-shirt-in-front-of-pc.jpg'
import { motion } from "framer-motion";

export function Text () {
  return (
    <Container>
      <motion.div animate={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.8 }}>
        <SideDivider>
          <div className="date">
              Dezembro, dia 4
            </div>
            <DottedLine className="verticallyLine" />
        </SideDivider>
      </motion.div>
      <Content>
        <motion.div animate={{ x: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.8 }}>
          <h1 className="title">Tecnologia para a Solução do Problema de Acesso à Educação</h1>
          <p className="subtitle">
            Como a tecnologia pode ampliar as possibilidades e quebrar barreiras de acessibilidade na educação.
          </p>
          <DottedLine className="horizontallyLine" />
        </motion.div>
        <motion.div animate={{ y: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.8 }}>
          <div className="content-body">
            <NewQuote
              phrase="A tecnologia - não importa quão bem projetada - é apenas um ampliador da intenção e da capacidade humana. Não é um substituto."
              author="Kentaro Toyama (Boston Review - Can Technology End Poverty?)"
            />
            <p className="paragraph">
              A situação de acesso à educação no Brasil é alarmante. São cerca de 11,3 milhões de analfabetos no país, uma taxa de 6,8% de pessoas acima dos 15 anos que não sabem ler ou escrever, segundo dados de junho de 2019 divulgados pelo IBGE. Os principais fatores que poderiam explicar a dificuldade de acesso ao ensino presentes na região brasileira seriam: localidade, realidade familiar, qualidade de ensino e falta de estrutura.
            </p>
            <NewDivider />
            <NewImage
              image={childrenOnChairsImg}
              alt="crianças em carteiras dentro da sala de aula"
            />
            <NewDivider />
            <p className="paragraph">
              A partir disso, analisando os possíveis causadores, percebe-se algo em comum entre eles: daria para resumi-los em limitações de espaço e dinheiro. Caso você seja perceptivo, deve ter notado que <span className="quot">&quot;qualidade do ensino&quot;</span> não condiz com as características citadas, mas este ponto em específico será tratado posteriormente. Seguindo a lógica, o primeiro ponto é facilmente eliminado com uso da tecnologia, afinal o ensino de forma virtual já foi inclusive usado em experiência recente por diversas escolas, devido à pandemia.
            </p>
            <p className="paragraph">
              No entanto, para que isso funcione, seria necessário a criação de uma plataforma de ensino que disponibilizasse aulas, materiais de estudo e promovesse a socialização dentro da plataforma, como  chat e/ou fóruns para discussão de conteúdos assistidos, como documentários. Em comparação, plataformas de ensino já existentes, como o Google Classroom, possuem pouco ou nenhum meio de interação entre os estudantes e não permitem uma grande liberdade do professor dentro da plataforma, sendo necessário recorrer a recursos de outras quando procura-se passar um conteúdo diferente.
            </p>
            <NewDivider />
            <NewImage
              image={boyInBlackShirtImg}
              alt="garoto usando camisa preta em frente ao pc"
            />
            <NewDivider />
            <p className="paragraph">
              Por outro lado, uma plataforma como essas provavelmente teria custo alto, até por esse motivo, todos os esforços possíveis para liberar o acesso gratuito ao app para os estudantes deveriam ser tomados. Caso seja possível conciliar uma experiência estudantil de qualidade com uma plataforma de fácil acesso e com recursos suficientes, certamente faltaria muito pouco para contribuir de verdade no futuro dessas pessoas.
            </p>
            <p className="paragraph">
              Dessa forma, o último problema relacionado ao app seria de fato torná-lo acessível. Recentemente no Brasil, um jogo de celular se tornou muito popular mesmo em comunidades mais precárias, esse foi o <span className="quot">&quot;Free Fire&quot;</span>. São duas as razões disso, mas para o propósito de hoje só uma interessa: dispositivos móveis. Hoje, mesmo nessas comunidades, a presença de um celular consegue ser recorrente, logo, disponibilizar o aplicativo com uma versão mobile é extremamente importante, caso o foco seja torná-lo acessível.
            </p>
            <p className="paragraph">
              Contudo, resta um ponto, a qualidade de ensino. Em conjunto, será tratado a necessidade de pessoas competentes e de fato dedicadas à ideia. Como na frase do começo desse texto, a tecnologia sozinha, mesmo que poderosa, não é capaz de sanar os problemas. Tanto a equipe por trás da plataforma, como os instrutores, teriam que se dedicar ao projeto. Então, com todas as etapas até aqui concluídas, seria possível fazer uso da tecnologia de forma eficaz para quebrar barreiras de acessibilidade na educação.
            </p>
            <NewQuote
              phrase="A educação exige os maiores cuidados, porque influi sobre toda a vida."
              author="Sêneca"
            />
            <NewDivider />
            <NewImage
              image={womanInFrontOfMackbookImg}
              alt="mulher sentada em frente à um Mackbook em uma biblioteca"
            />
          </div>
        </motion.div>
      </Content>
    </Container>
  )
}