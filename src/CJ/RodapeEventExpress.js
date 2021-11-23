import React from 'react';

import {Box, Container, Row, Column, FooterLink, Heading} from "./FooterStyle";



function Rodape(){
return(
<div className="mainFooter">

        <Box>
            <h1 style={{
                color: "white",
                textAlign: "center",
                marginTop: "-50px"
            }}>
                Todos os Direitos reservados.
            </h1>
            <Container className="d-flex justify-content-center">
                <Row>
                   
                   
                    
                    <Column>
                        <Heading>Open Souce</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                       
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
                
         
</div>
            );


    
       
}
export default Rodape