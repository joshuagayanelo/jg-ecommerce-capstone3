import { useState, useEffect } from 'react';
import { Card, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Button,
  Tooltip
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';
import { CgDetailsMore } from 'react-icons/cg';

const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1616627988170-8e7185217770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=679&q=80',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

interface RatingProps {
  rating: number;
  numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  );
}


export default function ProductsCard({productProp}) {


	const {productName, description, price, _id } = productProp;



	return (
		// <Container className="mb-3">
		// 	<Card>
		// 		<Card.Body>
		// 			<Card.Title>{productName}</Card.Title>
		// 			<Card.Subtitle>Description: </Card.Subtitle>
		// 			<Card.Text>{description}</Card.Text>
		// 			{/*<Card.Subtitle>Price</Card.Subtitle>*/}
		// 			<Card.Text>P {price}</Card.Text>
		// 			<Button variant ="primary" as={Link} to={`/products/${_id}`}>Details</Button>
		// 		</Card.Body>
		// 	</Card>			
		// </Container>

		<Flex p={50} w="full" alignItems="center" justifyContent="center" className="">
		  <Box
		    bg={useColorModeValue('white', 'gray.800')}
		    maxW="sm"
		    borderWidth="1px"
		    rounded="lg"
		    shadow="lg"
		    position="relative">
		    {data.isNew && (
		      <Circle
		        size="10px"
		        position="absolute"
		        top={2}
		        right={2}
		        bg="red.200"
		      />
		    )}

		    <Image
		      src={data.imageURL}
		      //src={'./products/image1.jpg'}
		      alt={`Picture of ${data.name}`}
		      roundedTop="lg"
		      type="button"
		    />

		    <Box p="6">
		      <Box d="flex" alignItems="baseline">
		        {data.isNew && (
		          <Badge rounded="full" px="1" fontSize="0.6em" colorScheme="red">
		            New
		          </Badge>
		        )}
		      </Box>
		      <Flex mt="1" justifyContent="space-between" alignContent="center">
		        <Box
		          fontSize="1xl"
		          fontWeight="semibold"
		          as="h4"
		          lineHeight="tight"
		          isTruncated>
		          {productName}
		        </Box>
		        <Tooltip
		          label="More details"
		          bg="white"
		          placement={'top'}
		          color={'gray.800'}
		          fontSize={'1.2em'}>
		          <chakra.a href={`/products/${_id}`} display={'flex'}>
		            <Icon as={CgDetailsMore} h={5} w={5} alignSelf={'center'} />
		          </chakra.a>
		        </Tooltip>
		      </Flex>

		      <Flex justifyContent="space-between" alignContent="center">
		        {/*<Rating rating={data.rating} numReviews={data.numReviews} />*/}
		        <Box fontSize="1xl" color={useColorModeValue('gray.800', 'white')}>
		          <Box as="span" color={'gray.600'} fontSize="lg">
		            Php 
		          </Box>
		           {/*{` ${data.price.toFixed(2)}`}*/}
		           {` ${price}`}
		        </Box>
		      </Flex>
		      <Button 
		      	variant={'outline'} 
		      	as={Link} 
		      	to={`/products/${_id}`}
		      	textDecoration='none'
		      	borderColor='gray'
		      	borderRadius='20px'
		      	fontWeight='400'
		      	fontSize={'.8rem'}
		      	mt={4}
		      	//w={40}
		      	className="text-right"
		      	_hover={{
		      	  bg: '#ECD444',
		      	  color:'black',
		      	  colorScheme:'black'
		      	}}
		      	style={{textDecoration: 'none'}}
		      	>
		      	Details
		      	</Button>
		    </Box>
		  </Box>
		</Flex>

	);
}