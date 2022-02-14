import {
  Box,
  Stat,
  Image,
  StatLabel,
  StatGroup,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const carImageUrl =
  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRnMkIvClF2araFWF_zgqAs7aOSQnYyjWGB-qJWso9WVmvG50sP";
const carCost = "23,000";
const carMake = "BMW";
const carModel = "3 Series";
const carYear = "2016";
const carMiles = "50,000";
const carId = "abcdef";

const dealershipName = "The Best Dealership";
const dealershipLocation = "The Moon, 23455, Mon";
const dealershipDistance = 10;

const CarComponent = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/car/${carId}`);
  };

  return (
    <Box
      maxW="sm"
      overflow="hidden"
      onClick={onClick}
      _hover={{ shadow: "xl" }}
    >
      <Box borderWidth="1px" borderTopRadius="lg">
        <Image src={carImageUrl}></Image>
      </Box>
      <Box borderWidth="1px" borderBottomRadius="lg">
        <StatGroup pl="20px" pt="5px">
          <Stat>
            <StatLabel>{`${carYear} ${carMake} ${carModel}`}</StatLabel>
            <StatNumber>${carCost}</StatNumber>
            <StatHelpText>{carMiles} miles</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>{dealershipName}</StatLabel>
            <StatNumber>{dealershipDistance} miles away</StatNumber>
            <StatHelpText>{dealershipLocation}</StatHelpText>
          </Stat>
        </StatGroup>
      </Box>
    </Box>
  );
};

export default CarComponent;
