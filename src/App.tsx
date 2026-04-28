import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

function App() {
return (
  <Box bg="gray.900" minH="100vh" py={8}>
    <Container maxW="650px">
      <VStack gap={5} align="stretch">
        <Box bg="gray.800" p={6} borderRadius="2xl" boxShadow="md">
          <Heading size="lg" color="white">
            Yapper
          </Heading>
          <Text color="gray.400" mt={2}>
            A simple Twitter clone built with Vite and Chakra UI.
          </Text>
        </Box>
      </VStack>
    </Container>
  </Box>
);
}

export default App;