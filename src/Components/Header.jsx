
import { Heading,Highlight } from "@chakra-ui/react"

const Header = () => {
  return (
    <div>
      <Heading lineHeight='tall' my={40} textAlign="center">
  <Highlight
   query={['Github', 'Users']}
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'black', color: 'white' }}
  >
    Find The Users On Github
  </Highlight>
</Heading>
    </div>
  )
}

export default Header
