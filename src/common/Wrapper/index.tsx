import { Box } from "@chakra-ui/react";

export const Wrapper = (props: {
  children: React.ReactNode;
  backgroundImage?: string;
}) => {
  return (
    <Box
      h="calc(100vh - 60px)"
      backgroundImage={`url('${props.backgroundImage}')`}
      backgroundSize="cover"
    >
      {props.children}
    </Box>
  );
};
