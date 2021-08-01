import React from 'react'
import Logo from '../../assets/Logo.svg'
import Icon from '../../assets/Filter.svg'
import BackgroundInfos from '../../assets/Background infos.svg'
import BackgroundCard from '../../assets/Background card.svg'
import { Flex, Image, Select, Input, Button, InputRightElement, InputGroup, Box, Text, Center, Divider, ButtonGroup, Spacer} from "@chakra-ui/react"
import { SearchIcon, SmallAddIcon, EditIcon, DeleteIcon,  } from "@chakra-ui/icons"

export const Home = () => {
  return (
    <Flex
      bg='#D9D2CF'
      flexDirection='column'
      justifyContent='space-between'
      minHeight='100vh'
    >
      <Flex bg='#FBFAFA'>
        <Image src={Logo} alt="Hortinja Logo"
          paddingX='15%'
          paddingY='1'
        />
        <Flex
          paddingY='3'
          ml='15%'
        >
          <Select
            placeholder="Selecionar categoria"
            icon={Icon}
            color='#757270'
            bg='#D9D2CF'
            paddingX='2'
            borderRadius='100'
          >
          </Select>
          <InputGroup>
            <Input
              placeholder="Buscar Hortaliça"
              borderRadius='100'
              
              bg='#D9D2CF'
            />
            <InputRightElement width="4.5rem">
              <Button
                ml='5'
                h="1.75rem"
                size="sm"
                bg='#D9D2CF'
                borderRadius='100'
              >
                <SearchIcon />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
      <Center>
        <Box minHeight='80vh'>
          <Image src={BackgroundInfos} />
          <Divider marginY='4' colorScheme='blackAlpha'/>
          <Box textAlign='center'>
            <Button leftIcon={<SmallAddIcon/>} bg="#006B5C" color='#fff' mr='4' borderRadius='100' width='360px'>
              Adicionar hortaliça
            </Button>
            <Button leftIcon={<SmallAddIcon/>} bg="#006B5C" color='#fff' borderRadius='100' width='360px'>
              Adicionar categoria
            </Button>
          </Box>
          <Text mt='10' textAlign='left' fontSize="3xl" fontWeight='bold'>Verduras <EditIcon/></Text>
          <Box
            mt='10px'
            height='380px'
            width='340px'
            bg='#FBFAFA'
            borderRadius='25px'
            align='center'
            padding='10px'
          >
            <Image src={BackgroundCard}/>
            <Box textAlign='left' padding='10px'>
            <Text fontWeight='bold' fontSize='16px'>Titulo</Text>
            <Text mt='1' fontSize='16px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
              <Flex mt='20px'>
                <ButtonGroup>
                  <Button bg='#DB4444'>
                  <DeleteIcon color='#FBFAFA'/>
                  </Button>
                  <Button bg='#757270'>
                    <EditIcon color='#FBFAFA'/>
                  </Button>
                </ButtonGroup>
                <Spacer/>
                <Text p='2'>Media R$1,99 unid</Text>
              </Flex>
            </Box>
          </Box>
        </Box>
        
      </Center>
      
      <Box>
        <Text textAlign='center' padding='2' color='gray' fontSize='15px'>
          Copyright © 2021 💚 Feito com  por Kazap Tecnologia - Todos os direitos reservados
        </Text>
      </Box>
    </Flex>
  )
}