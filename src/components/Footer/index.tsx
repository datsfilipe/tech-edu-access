import { Container } from "./styles"
import { VscGithubInverted } from 'react-icons/vsc'
import { motion } from 'framer-motion'

export function Footer () {
  return (
    <Container>
      <div className="github">
        <a title="github do autor" href="https://github.com/datsfilipe">
          <VscGithubInverted size="32" />
        </a>
      </div>
    </Container>
  )
}