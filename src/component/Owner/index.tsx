import { Flex, Spinner, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { useQuery } from "react-query";

export const OwnerInfo = () => {
  const { isLoading, error, data } = useQuery("ownerInfo", () =>
    fetch(`https://bringhome-me.firebaseio.com/pets/lola/owner.json`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Flex>
      <Stat paddingBottom="5">
        <StatLabel>Owner</StatLabel>
        <StatNumber>{data?.ownerName}</StatNumber>
      </Stat>
      <Stat paddingBottom="5">
        <StatLabel>Phone Number</StatLabel>
        <StatNumber>{data?.phone}</StatNumber>
      </Stat>
    </Flex>
  );
};
