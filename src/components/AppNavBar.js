//import { Navbar, Nav, Form } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import { useState, Fragment, useContext } from 'react';
import UserContext from '../UserContext';
import { ChakraProvider } from '@chakra-ui/react'
import {SiBuymeacoffee} from 'react-icons/si';
import {RiShoppingCartLine} from 'react-icons/ri';
import {RiListSettingsLine} from 'react-icons/ri';


import {
  Box,
  Flex,
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
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const toRegister = (e) => {
  	window.location.href="/register"
  }

  return (
    <Box>
      <Flex
        bg={useColorModeValue('#1e1e1e', 'gray.100')}
        color={useColorModeValue('white.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('#1e1e1e', 'gray.900')}
        align={'center'}>

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
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            color={'white'}
            href={'/login'}
            _hover={{
              color: 'gray.200',
            }}>
            Sign In
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'#1e1e1e'}
            bg={'yellow.500'}
            // href={'/register'}
            onClick={() => toRegister()}
            _hover={{
              bg: 'yellow.600',
            }}>
            Sign Up
          </Button>
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
                  color: '#d69e2e'
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
      bg={useColorModeValue('#d69e2e', 'gray.800')}
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
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
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
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
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
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designs',
        href: '#',
      },
    ],
  },
  {
    label: 'Work with us',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Products',
    href: '/products',
  },,
  {
    label: 'Cart',
    href: '/cart',
  },
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

