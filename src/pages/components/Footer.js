import { ButtonGroup, Container, IconButton, Stack, Text, Divider, } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <Container maxW='100%' px='10' as="footer" role="contentinfo">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        py={{ base: '5', md: '8' }}
      >
      </Stack>
      <Divider />
      <Stack
        py='5'
        justify="space-between"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Name of the Website, Inc. All rights reserved.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton as="a" href="#" isRound='true' aria-label="Facebook" icon={<FaFacebook fontSize="1.25rem" />}/>
          <IconButton as="a" href="#" isRound='true' aria-label="Instagram" icon={<FaInstagram fontSize="1.25rem" />} />
          <IconButton as="a" href="#" isRound='true' aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
        </ButtonGroup>
      </Stack>
    </Container>
   )
}

export default Footer
//Sample Hello