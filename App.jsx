import { Box, useColorModeValue } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import CreateProduct from "./pages/CreateProduct"

function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
        {/*Navbar */}
        <Navbar/>
        <Routes>
          {/* home*/}
          <Route path="/" element={<HomePage/>}/>
          {/* create product */}
          <Route path="/create" element={<CreateProduct/>}/>
        </Routes>
      </Box>
    </>
  )
}

export default App
