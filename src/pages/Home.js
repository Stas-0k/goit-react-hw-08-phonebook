import { Heading, Image  } from '@chakra-ui/react'

export default function Home() { 
    return (
        <>
        <Heading mt={20} ml={25} color={'darkblue'}>Welcome to Contacts Application by Stas-0k</Heading>
        <Image src='https://ru.reactjs.org/logo-og.png' borderRadius='3xl'
  boxSize='100px' ml={350} mt={5}></Image>
        </>
      
    )
}