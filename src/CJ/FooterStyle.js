import styled from 'styled-components';

export const Box = styled.div`
padding: 50px 20px;
background: black;
position: fixed;
bottom: 0px;
width: 100%;
margin-top: 0px;
@media (max-width: 1000px) {
}
`;

export const Container = styled.div`
    align-items: center;
	max-width: 1000px;
	margin: 0 auto;
	
`

export const Column = styled.div`
display: flex;
flex-direction: column;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(100px, 1fr));
grid-gap: 10px;

 @media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
 }
`;

export const FooterLink = styled.a`
color: #fff;
font-size: 18px;
text-decoration: none;
padding:5px;


}
`;

export const Heading = styled.p`
font-size: 16px;
color: #fff;
margin-bottom: 0px;
font-weight: bold;
`;
