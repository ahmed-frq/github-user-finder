import { useRef, useState } from "react";
import Header from "./Components/Header";
import axios from "axios";
import {
  Flex,
  Spinner,
  Input,
  Button,
  Stack,
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Link,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";

function App() {




  let [userEl , setUserel] = useState([])

  const onSubmit = async (e) => {
    const inputVal = document.getElementById('default-search').value;
    e.preventDefault();

    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${inputVal}`);


      let newsData = response.data.items.map(( i , e) => {

    

        return <>

 <Box

minW={"300px"}

boxShadow={"2xl"}
rounded={"lg"}
p={6}
textAlign={"center"}
>
<Avatar
  size={"xl"}
  src={`${i.avatar_url}`}
  mb={4}
  pos={"relative"}
/>
<Heading fontSize={"2xl"} fontFamily={"body"}>
  {i.login}
</Heading>

<a href={`${i.html_url}`}>
  <Button
    my={4}
    flex={1}
    width={"full"}
    fontSize={"sm"}
    rounded={"full"}
    bg={"blue.400"}
    color={"white"}
    boxShadow={
      "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
    }
    _hover={{
      bg: "blue.500",
    }}
    _focus={{
      bg: "blue.500",
    }}
  >
    Link
  </Button>
</a> 
</Box>
  
  
  </>



       
      })
  
  setUserel(newsData)







    } catch (error) {
      console.error(error);
    }
  
  
  
 



 

console.log(userEl)
  };





  return (
    <>
      <Spinner
        size="xl"
        position="absolute"
        transform="translate(-50%,-50%)"
        display="none"
        top="50vh"
        left="50%"
        zIndex={100}
      />

      <Flex width="100vw" alignItems="center" flexDirection="column">
        <Header />

        <form action="submit" onSubmit={onSubmit}>
          <Stack
            direction="row"
            spacing={2}
            justify="center"
            alignItems="center"
          >
            <Input autoComplete="off" id="default-search" placeholder="Search Users" width="600px" size="lg" />
            <Button onClick={onSubmit} colorScheme="teal" variant="outline">
              Search
            </Button>
          </Stack>
        </form>

        <Flex gap={10}  flexWrap={'wrap'} justifyContent={'center'} my={10}>



          {userEl}

         



        </Flex>
      </Flex>
    </>
  );
}

export default App;



//  <Box

// minW={"300px"}

// bg={useColorModeValue("white", "gray.900")}
// boxShadow={"2xl"}
// rounded={"lg"}
// p={6}
// textAlign={"center"}
// >
// <Avatar
//   size={"xl"}
//   src={userData[i].avatar_url}
//   mb={4}
//   pos={"relative"}
// />
// <Heading fontSize={"2xl"} fontFamily={"body"}>
//   {userData[i].login}
// </Heading>

// <a href={`${userData[i].html_url}`}>
//   <Button
//     my={4}
//     flex={1}
//     width={"full"}
//     fontSize={"sm"}
//     rounded={"full"}
//     bg={"blue.400"}
//     color={"white"}
//     boxShadow={
//       "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
//     }
//     _hover={{
//       bg: "blue.500",
//     }}
//     _focus={{
//       bg: "blue.500",
//     }}
//   >
//     Link
//   </Button>
// </a> 
// </Box>