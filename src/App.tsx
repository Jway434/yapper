import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  Input,
} from "@chakra-ui/react";

function App() {
const tweets = [
  {
    name: "Maya Johnson",
    username: "@maya_codes",
    time: "2m",
    text: "Just got my Vite app running with Chakra UI. The hardest part was realizing components are just fancy building blocks.",
    likes: 14,
    replies: 3,
    tag: "Web Dev",
  },
  {
    name: "Ethan Brooks",
    username: "@ethanbuilds",
    time: "12m",
    text: "Today I learned that a Stack is basically a cleaner way to organize stuff on a page without fighting CSS forever.",
    likes: 22,
    replies: 5,
    tag: "Chakra",
  },
  {
    name: "Ava Smith",
    username: "@ava_secure",
    time: "25m",
    text: "Hardcoding data first actually makes sense. Get the page looking right, then connect real data later.",
    likes: 31,
    replies: 8,
    tag: "Cyber 301",
  },
];
return (
<Box bg="gray.800" p={5} borderRadius="2xl" boxShadow="md">
  <VStack gap={3} align="stretch">
    <Text fontWeight="bold" color="white">
      Create a post
    </Text>
    <Input
      placeholder="What's happening?"
      bg="gray.700"
      borderColor="gray.600"
      color="white"
    />
    <Button colorScheme="twitter" alignSelf="flex-end">
      Yap
    </Button>
  </VStack>
</Box>
);
}

export default App;