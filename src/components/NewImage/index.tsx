import Image from 'next/image'
import { Container } from './styles'
import { motion } from 'framer-motion'

interface NewImageProps {
  image: StaticImageData;
  alt: string;
}

export function NewImage ({image, alt}: NewImageProps) {
  return (
    <Container>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.08,
          transition: { duration: 0.4 },
        }}
      >
        <Image src={image} alt={alt} layout="intrinsic" />
      </motion.div>
    </Container>
  )
}