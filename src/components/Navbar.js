import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    justify-content: right;
    align-items: right;
    width: 100%;
    z-index: 6;
    right: 4rem;
`
const MenuBar = styled.li`
    list-style: none;
    width: 30rem;
    height: 6rem;
    font-family: 'Cuprum';

    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${props => props.theme.fontlg};
    
    li:hover{
        color: orange;
    }
`


const NavBar = () => {
    return (
        <NavContainer>
           <MenuBar>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/aboutus">
                    <li>About Us</li>
                </Link>
                <Link to="products/">
                    <li>Products</li>
                </Link>
                <Link to="/order">
                    <li>Order</li>
                </Link>
                <Link to="/cantactus">
                    <li>Contact Us</li>
                </Link>
           </MenuBar>
        </NavContainer>
      );
}
 
export default NavBar;