import { Container, Form, Row, Col } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../UserContext'
import { Navigate } from 'react-router-dom';

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  useToast
} from '@chakra-ui/react';

export default function Login() {

	const {user, setUser} = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isActive, setIsActive] = useState(false);
	const toast = useToast();
	
	const loginUser = (e) => {
		e.preventDefault();

		fetch('https://capstone2-joshuagayanelo.herokuapp.com/api/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}, 
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(res => res.json())
		.then(data => {
			
			//console.log(data)
			if(typeof data.accessToken !== "undefined") {
				localStorage.setItem('token', data.accessToken)
				retrieveUserDetails(data.accessToken)

	       		  toast({
	       		    title: 'You have successfully signed in',
	       		    description: `User ${email} has been verified.`,
	       		    status: 'success',
	       		    position: 'top',
	       		    isClosable: true,
	       		    duration:3500
	       		  })
			           		

			} else {
				
				toast({
				  title: 'Incorrect email or password.',
				  status: 'error',
				  position: 'top',
				  isClosable: true,
				  duration:3500
				})

			}

		})

	};

	const retrieveUserDetails = (token) => {
		fetch('https://capstone2-joshuagayanelo.herokuapp.com/api/users/details',{
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then(res => res.json())
		.then(data => {

			//console.log(data)
			setUser({
				id: data._id,
				isAdmin: data.isAdmin

			})
		})
	}



	useEffect(() => {
		if(email !== "" && password !==""){
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [email, password])


	return(

		(user.isAdmin === true) ?

		<Navigate to='/admin-dashboard'/>

		: (user.isAdmin == false) ?

		<Navigate to='/'/>

		:

		<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} >

		     <Flex p={8} flex={1} align={'center'} justify={'center'}>
		       <Stack spacing={4} w={'full'} maxW={'md'} className="signInInput">
		         <Heading fontSize={'3xl'}>Sign in to your account</Heading>
		         <FormControl 
		         	id="email"
 	 				required
 	 				value={email}
 	 				onChange={e => {setEmail(e.target.value)}}
		         	>
		           <FormLabel>Email address</FormLabel>
		           <Input type="email" />

		         </FormControl>
		         <FormControl 
		         	id="password"
 	 				required
 	 				value={password}
 	 				onChange={e => {setPassword(e.target.value)}}
		         	>
		           <FormLabel>Password</FormLabel>
		           <Input type="password" />
		         </FormControl>
		         <Stack spacing={6}>
		           <Stack
		             direction={{ base: 'column', sm: 'row' }}
		             align={'start'}
		             justify={'space-between'}>
		             <Checkbox colorScheme='green' >Remember me</Checkbox>
		             <Link color={'#1e1e1e'}>Forgot password?</Link>
		           </Stack>

		         	{ isActive ?
			           <Button
			           		onClick={(e) => loginUser(e)} 
			           		type={'submit'}
			           		fontSize={'sm'}
			           		fontWeight={400}
			           		colorScheme={'blue'} 
			           		variant={'outline'}
			           		rounded={'full'}
			           		backgroundColor={'#1e1e1e'}
			           		borderColor={'#1e1e1e'}
			           		color={'white'}
			           		// _hover={{
			           		//   transform: 'translateY(2px)',
			           		//   boxShadow: 'lg',
			           		//   borderColor: '#ECD444'}}
			           		_hover={{
			           		  bg: '#ECD444',
			           		  color:'black',
			           		  colorScheme:'black',
			           		  borderColor:'#ECD444'
			           		}}
			        		

			           		
			           	>
			             Sign in
			           </Button>
			         :
			           <Button 
			           		disabled
			           		fontSize={'sm'}
			           		fontWeight={400}
			           		colorScheme={'blue'} 
			           		variant={'outline'}
			           		rounded={'full'}
			           		backgroundColor={'#1e1e1e'}
			           		borderColor={'#1e1e1e'}
			           		color={'white'}
			           		// _hover={{
			           		//   transform: 'translateY(2px)',
			           		//   boxShadow: 'lg',
			           		//   borderColor: '#ECD444'}}
			           		_hover={{
			           		  bg: '#ECD444',
			           		  color:'black',
			           		  colorScheme:'black',
			           		  borderColor:'#ECD444'
			           		}}
			           	>
			             Sign in
			           </Button>
		         	}
		           
		         </Stack>
		       </Stack>
		     </Flex>
		     <Flex flex={1}>
		       <Image
		         alt={'Login Image'}
		         objectFit={'cover'}
		         src={
		           './products/image1.jpg'
		         }
		       />
		     </Flex>

		   </Stack>
		
		// <div>
		// 	<h1 className="text-center mt-3">Login to Bentta</h1>
		// 	<Container>
		// 		<Row>
		// 		  	<Col className="bg-success">
		// 		  		<div >
		// 		  			Section
		// 		  		</div>
		// 		  	</Col>
		// 		 	 <Col className="">
		// 		 	 	<Form className="mt-5" onSubmit={(e) => loginUser(e)}>
		// 		 	 		{/*Email address*/}
		// 		 	 		<Form.Group controlId="userEmail">
		// 		 	 			<Form.Label>Email:</Form.Label>	
		// 		 	 			<Form.Control 
		// 		 	 				type="email"
		// 		 	 				placeholder="Enter your email address here"
		// 		 	 				required
		// 		 	 				value={email}
		// 		 	 				// pattern=
		// 		 	 				onChange={e => {setEmail(e.target.value)}}

		// 		 	 			/>	
		// 		 	 		</Form.Group>
		// 		 	 		{/*Password*/}
		// 		 	 		<Form.Group controlId="password">	
		// 		 	 			<Form.Label>Password:</Form.Label>	
		// 		 	 			<Form.Control 
		// 		 	 				type="password"
		// 		 	 				placeholder="Please enter your password here"
		// 		 	 				required
		// 		 	 				value={password}
		// 		 	 				onChange={e => {setPassword(e.target.value)}}
		// 		 	 			/>
		// 		 	 		</Form.Group>

		// 		 	 		{
		// 		 	 			isActive ?
		// 		 	 			<Button className="btn" variant="primary" type="submit">
		// 		 	 				Login
		// 		 	 			</Button>
		// 		 	 			:
		// 		 	 			<Button className="btn" variant="secondary" disabled>
		// 		 	 				Login
		// 		 	 			</Button>
		// 		 	 		}

		// 		 	 		{/*<Form.Text className="mt-3" as={Link} to="/admin-login">Are you an admin?</Form.Text>*/}

		// 		 	 	</Form>
		// 		 	 </Col>
		// 		</Row>
		// 	</Container>
		// </div>
		
	);
};	