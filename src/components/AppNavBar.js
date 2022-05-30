
""	//import { Navbar, Nav, Form } from 'react-bootstrap';
	//import { Link } from 'react-router-dom';
	import { useState, Fragment, useContext } from 'react';
	import UserContext from '../UserContext';
	import { ChakraProvider } from '@chakra-ui/react'
	import {SiBuymeacoffee} from 'react-icons/si';
	import {FiShoppingCart} from 'react-icons/fi';
	import React from 'react';

	

	import {
	  Box,
	  Flex,
	  Avatar,
	  HStack,
	  Text,
	  IconButton,
	  Button,
	  Stack,
	  Collapse,
	  Icon,
	  Link,
	  Popover,
	  PopoverTrigger,
	  PopoverContent,
	  useColorModeValue,
	  useBreakpointValue,
	  useDisclosure,
	  Menu,
	  MenuButton,
	  MenuList,
	  MenuItem,
	  MenuDivider
	} from '@chakra-ui/react';
	import {
	  HamburgerIcon,
	  CloseIcon,
	  ChevronDownIcon,
	  ChevronRightIcon,
	} from '@chakra-ui/icons';

	export default function WithSubnavigation() {
	 
	  const { user } = useContext(UserContext);
	  //console.log(user)

	  const { isOpen, onToggle } = useDisclosure();

	  const toRegister = () => {
	  	window.location.href="/register"
	  }

	  const toLogin = () => {	  
	  	window.location.href="/login"
	  }

	  const toLogout = () => {
	  	window.location.href="/logout"
	  } 


	  const toAdminDashboard = () => {
	  	window.location.href="/admin-dashboard"
	  } 

	  const toCart = () => {
	  	window.location.href ="/cart"
	  }

	  return (
	    <Box >
	      <Flex
	        bg={useColorModeValue('#1e1e1e', 'gray.100')}
	        color={useColorModeValue('white.600', 'white')}
	        minH={'70px'}
	        py={{ base: 2 }}
	        px={{ base: 4 }}
	        borderBottom={1}
	        borderStyle={'solid'}
	        borderColor={useColorModeValue('#1e1e1e', 'gray.900')}
	        align={'center'}
	        style={{paddingLeft: '30px'}}>

	        <Flex
	          flex={{ base: 1, md: 'auto' }}
	          ml={{ base: -2 }}
	          display={{ base: 'flex', md: 'none' }}>
	          <IconButton
	            onClick={onToggle}
	            icon={
	              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
	            }
	            variant={'ghost'}
	            aria-label={'Toggle Navigation'}
	          />
	        </Flex>

	        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
	          <Text
	            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
	            fontFamily={'heading'}
	            color={useColorModeValue('white', 'white')}
	            className="logoName">
	            Bentta
	          </Text>

	          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
	            <DesktopNav />
	          </Flex>
	        </Flex>

	        <Stack
	          flex={{ base: 1, md: 0 }}
	          justify={'flex-end'}
	          direction={'row'}
	          spacing={6}>

	          	{/*RIGHT NAV MENU*/}
	        	{
	        		(user.id !== null) ?

		        	<Fragment>
			        	<Menu>

		        		<Text className="userName text-right">
		        		Hello, Johnny
		        		</Text>
			        	  <MenuButton
			        	    className="avatar"
			        	    as={Button}
			        	    rounded={'full'}
			        	    variant={'link'}
			        	    cursor={'pointer'}
			        	    minW={0}>
			        	    <Avatar
			        	      size={'sm'}
			        	      // src={'./image/avatar.jpg'}
			        	      src={'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
			        	    />
			        	  </MenuButton>
			        	  <MenuList className="avatarMenuList">
			        	    <MenuItem>Profile</MenuItem>
			        	    <MenuItem>Preferences</MenuItem>
			        	    {
			        	    	(user.isAdmin === true) ?
			        	    	<MenuItem
			        	    		onClick={() => toAdminDashboard()}>
			        	    	Admin Dashboard</MenuItem>

			        	    	: false

			        	    }
			        	    
			        	    <MenuDivider />
			        	    <MenuItem
			        	    onClick={() => toLogout()}
			        	    >
			        	    Sign Out</MenuItem>
			        	  </MenuList>
			        	  <div className="cartIcon text-center">
			        	  	<FiShoppingCart size={20} 
			        	  		type="button"
			        	  		onClick={() => toCart()}
			        	  		/>
			        	  </div>

			        	</Menu>
			        
		        	</Fragment>

			        : false

			    }


			    {
			    	(user.id === null) ?
			        <Stack direction="horizontal" gap={4} style={{paddingRight: '20px'}}>
			          <Button
			          	//display={{ base: 'none', md: 'inline-flex' }}
			            //as={'Link'}			            
			            borderRadius='1px'
			            fontSize={'sm'}
			            fontWeight={400}
			            variant={'link'}
			            color={'white'}
			            onClick={() => toLogin()}
			            _hover={{
			              color: '#ECD444',
			            }}>
			            Sign In
			          </Button>

			          <Button
			            //display={{ base: 'none', md: 'inline-flex' }}
			            fontSize={'sm'}
			            fontWeight={400}
			            color={'white'}
			            borderRadius='20px'
			            bg={''}
			            variant={'outline'}
			            // href={'/register'}
			            onClick={() => toRegister()}
			            borderColor='gray'

			            _hover={{
			              bg: '#ECD444',
			              color:'black',
			              colorScheme:'black'
			            }}
			           >
			            Sign Up
			          </Button>
			         </Stack>

			         : false
			    }
			         
		        	
	        	
	        </Stack>


	      </Flex>

	      <Collapse in={isOpen} animateOpacity>
	        <MobileNav />
	      </Collapse>
	    </Box>
	  );
	}


	const DesktopNav = () => {
	  const linkColor = useColorModeValue('white', 'gray.200');
	  const linkHoverColor = useColorModeValue('gray.200', 'white');
	  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

	  return (
	    <Stack direction={'row'} spacing={4}>
	      {NAV_ITEMS.map((navItem) => (
	        <Box key={navItem.label}>
	          <Popover trigger={'hover'} placement={'bottom-start'}>
	            <PopoverTrigger>
	              <Link

	                p={2}
	                href={navItem.href ?? '#'}
	                fontSize={'sm'}
	                fontWeight={500}
	                color={linkColor}
	                _hover={{
	                  textDecoration: 'none',
	                  color: '#ECD444'
	                }}>
	                {navItem.label}
	              </Link>
	            </PopoverTrigger>

	            {navItem.children && (
	              <PopoverContent
	                border={0}
	                boxShadow={'xl'}
	                bg={popoverContentBgColor}
	                p={4}
	                rounded={'xl'}
	                minW={'sm'}>
	                <Stack>
	                  {navItem.children.map((child) => (
	                    <DesktopSubNav key={child.label} {...child} />
	                  ))}
	                </Stack>
	              </PopoverContent>
	            )}
	          </Popover>
	        </Box>
	      ))}
	    </Stack>
	  );
	};


	const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
	  return (
	    <Link
	      href={href}
	      role={'group'}
	      display={'block'}
	      p={2}
	      rounded={'md'}
	      _hover={{ bg: useColorModeValue('gray.50', 'gray.900') }}>
	      <Stack direction={'row'} align={'center'}>
	        <Box>
	          <Text
	            transition={'all .3s ease'}
	            _groupHover={{ color: 'gray.400' }}
	            fontWeight={500}>
	            {label}
	          </Text>
	          <Text fontSize={'sm'}>{subLabel}</Text>
	        </Box>
	        <Flex
	          transition={'all .3s ease'}
	          transform={'translateX(-10px)'}
	          opacity={0}
	          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
	          justify={'flex-end'}
	          align={'center'}
	          flex={1}>
	          <Icon color={'gray.400'} w={5} h={5} as={ChevronRightIcon} />
	        </Flex>
	      </Stack>
	    </Link>
	  );
	};


	const MobileNav = () => {
	  return (
	    <Stack
	      bg={useColorModeValue('#ECD444', 'gray.800')}
	      p={4}
	      display={{ md: 'none' }}>
	      {NAV_ITEMS.map((navItem) => (
	        <MobileNavItem key={navItem.label} {...navItem} />
	      ))}
	    </Stack>
	  );
	};


	const MobileNavItem = ({ label, children, href }: NavItem) => {
	  const { isOpen, onToggle } = useDisclosure();

	  return (
	    <Stack spacing={4} onClick={children && onToggle}>
	      <Flex
	      	className="avatarMenuList"
	        py={2}
	        as={Link}
	        href={href ?? '#'}
	        justify={'space-between'}
	        align={'center'}
	        _hover={{
	          textDecoration: 'none',
	        }}>
	        <Text
	          fontWeight={400}
	          color={useColorModeValue('#1e1e1e', 'gray.200')}>
	          {label}
	        </Text>
	        {children && (
	          <Icon
	            as={ChevronDownIcon}
	            transition={'all .25s ease-in-out'}
	            transform={isOpen ? 'rotate(180deg)' : ''}
	            w={6}
	            h={6}
	          />
	        )}
	      </Flex>

	      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
	        <Stack
	          className="avatarMenuList"
	          mt={1}
	          pl={4}
	          borderLeft={1}
	          borderStyle={'solid'}
	          borderColor={useColorModeValue('#1e1e1e', 'gray.700')}
	          align={'start'}>
	          {children &&
	            children.map((child) => (
	              <Link key={child.label} py={2} href={child.href}>
	                {child.label}
	              </Link>
	            ))}
	        </Stack>
	      </Collapse>
	    </Stack>
	  );
	};

	interface NavItem {
	  label: string;
	  subLabel?: string;
	  children?: Array<NavItem>;
	  href?: string;
	}

	const NAV_ITEMS: Array<NavItem> = [
	  {
	    label: 'Discover',
	    children: [
	      {
	        label: 'Get to know us.',
	        subLabel: 'What do we do, how and why we do it.',
	        href: '#',
	      },
	      {
	        label: "What's next",
	        subLabel: 'Up-and-coming Designs',
	        href: '#',
	      },
	    ],
	  },
	  // {
	  //   label: 'Work with us',
	  //   children: [
	  //     {
	  //       label: 'Job Board',
	  //       subLabel: 'Find your dream design job',
	  //       href: '#',
	  //     },
	  //     {
	  //       label: 'Freelance Projects',
	  //       subLabel: 'An exclusive list for contract work',
	  //       href: '#',
	  //     },
	  //   ],
	  // },
	  {
	    label: 'Home',
	    href: '/',
	  },
	  {
	    label: 'Shop',
	    href: '/products',
	  }
	  // {
	  //   label: 'Cart',
	  //   href: '/cart',
	  // },
	];



	// export default function AppNavBar() {
	// 	/*
	// 		Syntax:
	// 			localStorage.getItem(propertyName)
	// 	*/
	// 	// const [user, setUser] = useState(localStorage.getItem("email"));
	// 	// console.log(user);

	// const { user } = useContext(UserContext);

	// return(
	// 		<Navbar className="nav-bg" expand="lg" variant="dark">
	// 			<Navbar.Brand as={Link} to="/" className="brandName" >
	// 				<SiBuymeacoffee style={{ color: 'white' }}/> 
	// 			</Navbar.Brand>
	// 			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
	// 			<Navbar.Collapse id="basic-navbar-nav" >
	// 				<Nav className="m-auto">
	// 					<Link className="nav-link" style={{ color: 'white' }} to='/'> Home </Link>
	// 					<Link className="nav-link" style={{ color: 'white' }} to='/products'> Products </Link>

	// 					{ 
	// 						(user.id !== null) ?
	// 						<Nav.Link as={Link} style={{ color: 'white' }} to='/logout'>Logout</Nav.Link>
	// 						:
	// 						<Fragment>
	// 							<Nav.Link as={Link} style={{ color: 'white' }} to='/register'> Register </Nav.Link>
	// 							<Nav.Link as={Link} style={{ color: 'white' }} to='/login'> Login </Nav.Link>
	// 						</Fragment>
	// 					}


	// 				</Nav>
	// 				{ 
						
	// 					(user.isAdmin === true)? 
	// 						<Navbar.Brand as={Link} to="/admin-dashboard" className="brandName" >
	// 							<RiListSettingsLine  style={{ color: 'white' }}  />	
	// 						</Navbar.Brand>

	// 					: (user.id !== null && user.isAdmin !== true ) ?
	// 						<Navbar.Brand as={Link} to="/cart" className="brandName" >
	// 							<RiShoppingCartLine style={{ color: 'white' }}  />
	// 						</Navbar.Brand>
	// 					:
	// 						<Navbar.Brand className="brandName" >
	// 							<RiShoppingCartLine style={{ color: 'transparent' }}  />
	// 						</Navbar.Brand>
	// 				}
					
	// 			</Navbar.Collapse>

	// 		</Navbar>
	// 	)
	// };

