import * as React from "react";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";
// import backgroundImage from "https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg"
import Header from "components/Header";
import KanbanStack from "components/KanbanStack";

const App: React.FC =()=>(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Box 
    backgroundImage="url('https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg')"
    backgroundPosition="50%"
    backgroundSize="cover"
    height='100vh'
    position='relative'
    >
      <Header /> 
      <KanbanStack />
    </Box>
  </ChakraProvider>
)

export default App;