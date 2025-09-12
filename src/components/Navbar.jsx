import { Avatar, Box, Flex, Heading } from '@radix-ui/themes'

const Navbar = () => {
  return (
    <Flex gap="2" align="center" justify="between" p="30px" >
      <Heading>Contact Card</Heading>
      <Avatar color='red' size='large' fallback="BK" ></Avatar>
    </Flex>
  )
}

export default Navbar