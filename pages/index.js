import { Box, Button, Flex, FormLabel, Icon, Input, Link, Select, Spacer, Text, Textarea } from '@chakra-ui/react'
import { SiIbm } from "react-icons/si";
import CODELANG from '../components/codeLang'
import axios from 'axios'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Navbar } from '../components/navbar'
const token = 'YXBpa2V5OnNjdEJYTjV5NjBVUi1pb2RvVEdsQmU4eW4yNVhpWm9LTXlIQ0JsaHk5NWRm'
const url = 'https://api.au-syd.language-translator.watson.cloud.ibm.com/instances/e9580333-b8a8-42c5-85ce-5a7625701169/v3/translate?version=2018-05-01'



export default function Home() {
  let [value, setValue] = useState('')
  let [translate, setTranslate] = useState('')
  let [from, setFrom] = useState('en')
  let [to, setTo] = useState('id')

  const handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  useEffect(() => {
    // const handleTranslate = () => {
    if (value) {
      axios.post(url, {
        text: value,
        model_id: `${from}-${to}`
      }, {
        headers: {
          'Authorization': `Basic ${token}`,
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log(res.data.translations[0].translation)
        setTranslate(res.data.translations[0].translation)
      })
    }
  }, [value, from, to])
  return (
    <div>
      <Head>
        <title>Translator</title>
        <meta name="description" content="By string_sout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Box width={{ base: '100%', sm: '100%', md: '80%' }} height='auto' mx='auto' borderRadius={5} pb={5} mt={10} backgroundColor='' display={{ md: 'flex' }} >
        <Box width={{ base: '100%', sm: '100%', md: '50%' }}>
          <Flex backgroundColor='teal' p={2} borderTopLeftRadius={10}>
            <FormLabel m={2}>From</FormLabel>
            <Select width='30%' value={from} onChange={(e) => { setFrom(e.target.value) }}>
              {CODELANG.map((item, index) => {
                return <option key={index} value={item.code}>{item.name}</option>
              })
              }
            </Select>
          </Flex>
          <Textarea
            height={400}
            value={value}
            onChange={handleInputChange}
            size='md'
            autoFocus={true}
          />
        </Box>
        <Box width={{ base: '100%', sm: '100%', md: '50%' }} backgroundColor=''>
          <Flex backgroundColor='teal' p={2} borderTopRightRadius={10}>
            <FormLabel m={2}>To</FormLabel>
            <Select width='30%' value={to} onChange={(e) => { setTo(e.target.value) }}>
              {CODELANG.map((item, index) => {
                return <option key={index} value={item.code}>{item.name}</option>
              })
              }


            </Select>
          </Flex>
          <Textarea
            height={400}
            value={translate}
            size='md'
            disabled
          />
        </Box>

      </Box>
      <Box width='100%' backgroundColor='teal'>
        {/* <Flex textAlign='center'>
          <Icon as={SiIbm} w={6} h={6} /> */}
        <Text fontSize='sm' color='gray.300' textAlign='center'>
          Powered by <Link href='https://www.ibm.com/cloud' isExternal fontWeight='bold'>IBM</Link> Watson Language Translator
        </Text>
        {/* </Flex> */}
      </Box>
    </div >
  )
}
