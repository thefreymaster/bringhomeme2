import {
  Box,
  Flex,
  Heading,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Stat,
  StatLabel,
  StatNumber,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { Loading } from "../../common/Loading";
import { Wrapper } from "../../common/Wrapper/index";
import { OwnerInfo } from "../Owner";

export const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const params: any = useParams();

  const { isLoading, isError, error, data } = useQuery("petInfo", () =>
    fetch(
      `https://bringhome-me.firebaseio.com/pets/${params?.petId}/pet.json`
    ).then((res) => res.json())
  );

  if (isError) {
    return (
      <Wrapper>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Error!</AlertTitle>
          <AlertDescription>
            Please check the spelling and try again.
          </AlertDescription>
        </Alert>
      </Wrapper>
    );
  }

  if (isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  return (
    <Wrapper backgroundImage="https://s3.amazonaws.com/bringhome.me/lola.jpeg">
      <Flex
        bg="transparent"
        justifyContent="flex-start"
        p="0px 25px"
        flexDir="column"
      >
        <Heading
          lineHeight="100px"
          fontFamily="'Lobster', cursive"
          as="h1"
          size="4xl"
          isTruncated
          color="white"
          textAlign="left"
        >
          {data.name}
        </Heading>
        <Flex>
          <Text fontSize="lg" color="white" fontWeight="medium">
            {data.breed}
          </Text>
          <Text
            padding="0px 5px"
            fontSize="lg"
            color="white"
            fontWeight="medium"
          >
            |
          </Text>
          <Text fontSize="lg" color="white" fontWeight="medium">
            {data.age} Years Old
          </Text>
        </Flex>
        <Text textAlign="left" fontSize="lg" color="white" fontWeight="medium">
          {data.unique}
        </Text>
      </Flex>
      <IconButton
        aria-label="info"
        icon={<AiOutlineInfoCircle />}
        colorScheme="gray"
        onClick={onOpen}
        position="absolute"
        bottom="50px"
        left="calc(50vw - 20px)"
      />
      <Drawer isOpen={isOpen} placement="bottom" size="full" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton colorScheme="whiteAlpha" />
          <DrawerHeader>Lola's Details</DrawerHeader>

          <DrawerBody>
            <Stat paddingBottom="5">
              <StatLabel>Name</StatLabel>
              <StatNumber>{data.name}</StatNumber>
            </Stat>
            <Stat paddingBottom="5">
              <StatLabel>Breed</StatLabel>
              <StatNumber>{data.breed}</StatNumber>
            </Stat>
            <Stat paddingBottom="5">
              <StatLabel>Unique Characteristics</StatLabel>
              <StatNumber>{data.unique}</StatNumber>
            </Stat>
            <Flex>
              <Stat paddingBottom="5">
                <StatLabel>Weight</StatLabel>
                <StatNumber>{data.weight}</StatNumber>
              </Stat>
              <Stat paddingBottom="5">
                <StatLabel>Age</StatLabel>
                <StatNumber>{data.age}</StatNumber>
              </Stat>
            </Flex>
            {!data.isSafe && <OwnerInfo />}
          </DrawerBody>
          <DrawerFooter>
            <Button onClick={onClose} colorScheme="gray">
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Wrapper>
  );
};
