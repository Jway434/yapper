import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <Container>
        <VStack>
          <Box>
            <Heading>Yapper</Heading>
            <Text>A simple Twitter clone built with Vite and Chakra UI.</Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default App;