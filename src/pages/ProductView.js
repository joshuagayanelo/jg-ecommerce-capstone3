import {useState, useEffect, useContext} from 'react';
import {Row, Column, Card, Col, Form} from 'react-bootstrap';
import {useParams, useNavigate} from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';

export default function CourseView () {

	const {user} = useContext(UserContext);
	
	const navigate = useNavigate();

	//The userParams hook allows us to retrieve the courseId passed via the URL
	const {productId} = useParams();

	const [name, setName] = useState("");
	const [productIdA, setProductIdA] = useState("");
	const [productNameA, setProductNameA] = useState("");
	const [productSku, setProductSku] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);

	const [countQty, setCountQty] = useState(0)
	 
		const handleClick1 = () => {
		  setCountQty(countQty + 1)
		}
		 
		const handleClick2 = () => {
		  if(countQty >= 1) {
			setCountQty(countQty - 1)
		  }
		}

	const addToCart = (productId) => {

		fetch("http://localhost:4000/api/cart/add-to-cart/", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				user:user.id,
				productId: productIdA,
				productName: productNameA,
				productSku: productSku,
				description:description,
				qty:countQty,
				price:price
			})
		})


		.then(res => res.json())
		.then(data => {
			//console.log(data)

			if(data === true) {
				Swal.fire({
					title:"Added to cart.",
					icon:"success",
					text:"You can check your cart to review your items."
				})

				navigate('/products')

			} else {
				Swal.fire({
					title:"Something went wrong.",
					icon:"error",
					text:"Please try again."
				})
			}
		})
	};

	// console.log(user.id)
	// console.log(productIdA)
	//console.log(countQty)
	// console.log(price)
	// console.log(description)
	// console.log(productSku)
	//console.log(productNameA)

	useEffect(() => {
		// console.log(productId)
		fetch(`http://localhost:4000/api/products/${productId}`)
		.then(res => res.json())
		.then(data => {
			//console.log(data);
			setProductNameA(data.productName)
			setProductSku(data.productSku)
			setDescription(data.description)
			setPrice(data.price)
			setQuantity(data.quantity)
			setProductIdA(data._id)

			//console.log(data.quantity)


		})
	},[productId])

	return(

		<Container maxW={'7xl'}>
		     <SimpleGrid
		       columns={{ base: 1, lg: 2 }}
		       spacing={{ base: 8, md: 10 }}
		       py={{ base: 18, md: 24 }}>
		       <Flex>
		         <Image
		           rounded={'md'}
		           alt={'product image'}
		           src={
		             'https://images.unsplash.com/photo-1616627988170-8e7185217770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=679&q=80'
		           }
		           fit={'cover'}
		           align={'center'}
		           w={'100%'}
		           h={{ base: '100%', sm: '400px', lg: '500px' }}
		         />
		       </Flex>
		       <Stack spacing={{ base: 6, md: 10 }}>
		         <Box as={'header'}>
		           <Heading
		             lineHeight={1.1}
		             fontWeight={600}
		             fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
		             {productNameA}
		           </Heading>
		           <Text
		             color={useColorModeValue('gray.900', 'gray.400')}
		             fontWeight={300}
		             fontSize={'2xl'}>
		             Php {price}
		           </Text>
		         </Box>

		         <Stack
		           spacing={{ base: 4, sm: 6 }}
		           direction={'column'}
		           divider={
		             <StackDivider
		               borderColor={'gray'}
		             />
		           }>
		           <VStack spacing={{ base: 4, sm: 6 }}>
					{/*<Text
		               color={useColorModeValue('gray.500', 'gray.400')}
		               fontSize={'2xl'}
		               fontWeight={'300'}>
		               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
		               diam nonumy eirmod tempor invidunt ut labore
		             </Text>*/}
		             <Text fontSize={'lg'}>
		             {description}
		             </Text>
		           </VStack>
		           <Box>
		             <Text
		               fontSize={{ base: '16px', lg: '18px' }}
		               color={useColorModeValue('yellow.500', 'yellow.300')}
		               fontWeight={'500'}
		               textTransform={'uppercase'}
		               mb={'4'}>
		               Features
		             </Text>

		             <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
		               <List spacing={2}>
		                 <ListItem>Chronograph</ListItem>
		                 <ListItem>Master Chronometer Certified</ListItem>{' '}
		                 <ListItem>Tachymeter</ListItem>
		               </List>
		               <List spacing={2}>
		                 <ListItem>Anti‑magnetic</ListItem>
		                 <ListItem>Chronometer</ListItem>
		                 <ListItem>Small seconds</ListItem>
		               </List>
		             </SimpleGrid>
		           </Box>
		           <Box>
		             <Text
		               fontSize={{ base: '16px', lg: '18px' }}
		               color={useColorModeValue('yellow.500', 'yellow.300')}
		               fontWeight={'500'}
		               textTransform={'uppercase'}
		               mb={'4'}>
		               Product Details
		             </Text>

		             <List spacing={2}>
		               <ListItem>
		                 <Text as={'span'} fontWeight={'bold'}>
		                   Between lugs:
		                 </Text>{' '}
		                 20 mm
		               </ListItem>
		               <ListItem>
		                 <Text as={'span'} fontWeight={'bold'}>
		                   Bracelet:
		                 </Text>{' '}
		                 leather strap
		               </ListItem>
		               <ListItem>
		                 <Text as={'span'} fontWeight={'bold'}>
		                   Case:
		                 </Text>{' '}
		                 Steel
		               </ListItem>
		               <ListItem>
		                 <Text as={'span'} fontWeight={'bold'}>
		                   Case diameter:
		                 </Text>{' '}
		                 42 mm
		               </ListItem>
		               <ListItem>
		                 <Text as={'span'} fontWeight={'bold'}>
		                   Dial color:
		                 </Text>{' '}
		                 Black
		               </ListItem>
		               <ListItem>
		                 <Text as={'span'} fontWeight={'bold'}>
		                   Crystal:
		                 </Text>{' '}
		                 Domed, scratch‑resistant sapphire crystal with anti‑reflective
		                 treatment inside
		               </ListItem>
		               <ListItem>
		                 <Text as={'span'} fontWeight={'bold'}>
		                   Water resistance:
		                 </Text>{' '}
		                 5 bar (50 metres / 167 feet){' '}
		               </ListItem>
		             </List>
		           </Box>
		         </Stack>

				<Form>
				  <Form.Group className="mb-3" controlId="formBasicEmail">
				    {/*<Form.Label>Enter Qty</Form.Label>*/}
				    <Card.Text>Quantity: {countQty}</Card.Text>
				    <Button variant="transaprent" onClick={() => handleClick2()}>-</Button>
				    <Button variant="transaprent" onClick={() => handleClick1()}>+</Button>
				  </Form.Group>
			
				</Form>

		         { user.id !== null && quantity != 0 ?
			         <Button
			           rounded={'full'}
			           w={'full'}
			           mt={8}
			           size={'lg'}
			           py={'7'}
			           //bg={useColorModeValue('gray.900', 'gray.50')}
			          // color={useColorModeValue('white', 'gray.900')}
			           textTransform={'uppercase'}
			           _hover={{
			             transform: 'translateY(2px)',
			             boxShadow: 'lg',
			           }}
			           onClick={() => addToCart(productId)}
			           >
			           Add to cart
			         </Button>

			         :

			         <Button
			           rounded={'full'}
			           w={'full'}
			           mt={8}
			           size={'lg'}
			           py={'7'}
			           //bg={useColorModeValue('gray.900', 'gray.50')}
			           //color={useColorModeValue('white', 'gray.900')}
			           textTransform={'uppercase'}
			           disabled
			           _hover={{
			             transform: 'translateY(2px)',
			             boxShadow: 'lg',
			           }}>
			           No stocks available
			         </Button>
		         }

		         <Stack direction="row" alignItems="center" justifyContent={'center'} className="cartFooter">
		           <MdLocalShipping />
		           <Text>2-3 business days delivery</Text>
		         </Stack>
		       </Stack>
		     </SimpleGrid>
		   </Container>
		)
}