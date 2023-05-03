import { Box, Flex, Heading, Text, Input, Button} from '@chakra-ui/react';

import { IoBatteryFullSharp, IoWifiSharp, IoBarChartOutline} from 'react-icons/io5';
import Image from "next/image";

import lvp from "../public/lvp.png"





const Login = () => {
  return (
   
      <Box
        className='fst-css' 
        height={"635px"}
        width={['92%', '26%']}
        margin={"auto"}
        mt={"2em"}
        mb={"2em"} 
        bg={"#2070d9"}
        >
          <Flex 
            gap={"14.5em"}
            pt={".5em"}
            ml={"12px"}
            color={"white"}
          >
            <Text>9:41</Text>
            <Flex
              gap={"5px"}
              >
              <IoBarChartOutline />
              <IoWifiSharp />
              <IoBatteryFullSharp/>
            </Flex>
          </Flex>
          
          <Box 
              className='scd-css'
              w='100%' 
              color='white' 
              alignItems={"center"} 
              height={"350px"}
              // bg={'lightblue'}
              >
            <Box
              className='trd-css'
              position={"absolute"}
              width = {{sm: "92%", lg: "26%"}}
              top= {['242px', '245px']}
              background= {"#232323"}
              height= {"auto"} 
              borderTopLeftRadius={"8%"}
              borderTopRightRadius={"8%"}
              padding={"22px 18px"}
              border={"1px solid #232323"}
              >
              <Heading
              fontSize={"1.5rem"}
              >
                Welcome to Fynance
                </Heading>
                <Text
                  fontSize={".9rem"}
                  marginTop={"8px"}
                  color={"lightgrey"}
                >
                  Enter your phone number to login or register
                </Text>
                <Flex gap={"15px"} mt={"20px"}>
                  <Text mt={"22px"} color={"lightgrey"} >+84</Text>
                  <Input variant='flushed' />
                </Flex>
                <Text
                  textAlign={"center"}
                  fontSize={".8rem"}
                  pt={"10em"}
                  color={"lightgrey"}
                  >
                    By using Fynance you agree to Fynance's <br /> 
                  <span style={{color:"orange"}}>terms and conditions</span>
                </Text>
                <Button 
                  color={"white"} 
                  bg={"grey"}
                  size='sm'
                  padding={"18px 124px"} 
                  mt={"20px"}
                  >
                  Continue
                </Button>
                <Image 
                  src={lvp} 
                  alt='placeholder'
                  width= {200}
                  height={100}
                
                />

            </Box>
        </Box>
      </Box>
    
  )
}

export default Login



// const breakpoints = {
//   sm: '30em', // 480px
//   md: '48em', // 768px
//   lg: '62em', // 992px
//   xl: '80em', // 1280px
//   '2xl': '96em', // 1536px
// }

{/* <Image src={'./images/lvp.png'}  width={"100%"}></Image> */}









