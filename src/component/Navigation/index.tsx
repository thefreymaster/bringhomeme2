import { Box, Text } from "@chakra-ui/react";
import { GiSittingDog } from "react-icons/gi";
import { isDesktop } from "react-device-detect";

export const Navigation = (props: any) => {
  return (
    <Box
      zIndex={100}
      display="flex"
      padding="0px 20px 0px 20px"
      justifyContent="center"
      alignItems="center"
      backgroundColor="red.400"
      transition={{ backgroundColor: "1000ms ease-in-out" }}
      style={{
        willChange: "transform",
        width: "100vw",
        height: 60,
        left: 0,
      }}
    >
      <GiSittingDog color="white" />
      <Box marginLeft="10px">
        <Text fontWeight="bold" color="white">
          Bringhome.me
        </Text>
      </Box>
      {isDesktop && <Box flexGrow={1} />}
      <Box flexGrow={1} />
    </Box>
  );
};
