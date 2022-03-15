import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background-color: #101010;
    color: #fff;
    padding: 0 20px;  
`;

export const Header = styled.header`
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    padding: 30px 0;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    
`;

export const Logo = styled.img`
    width : 110px;
`;

export const Profile = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;

`;

export const ProfileImage = styled.img`
    width : 50px;
    border-radius: 50%;
`;

export const ProfileName = styled.h1`
    font-weight: bold;
    font-size: 20px;
`;

export const Nav = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

export const RideNav = styled.div`
    display: flex;
    gap: 30px;
    color: #D0CBCB;
    font-size: 18px;
    cursor: pointer;
`;

export const FilterLogo = styled.img`
    width: 75px;
    cursor: pointer;

`;

export const ListContainer = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
`;

