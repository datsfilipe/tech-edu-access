import { Container } from './styles'

interface NewQuoteProps {
  phrase: string;
  author: string;
}

export function NewQuote ({phrase, author}: NewQuoteProps) {
  return (
    <Container>
      <div className="quote">
        <p className="phrase">
        &quot;{phrase}&quot;
        </p>
        <p className="author">
          - {author}
        </p>
      </div>
    </Container>
  )
}