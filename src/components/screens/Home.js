import React from 'react'
import { Carousel, Card, Button, Row, Col } from "react-bootstrap";

function Home() {
    const img1 = "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/31/e27302d6-a2c4-4fd3-a2b1-c3bd92a8b2401554050196883-ESPRIT_Desktop_Banner.jpg";
    const img2 = "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/30/e5a955ac-e224-4b83-aaac-e86674ddb7471553959219090-Zaveri_Desktop_Banner.jpg";
    const img3 = "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    
    return (
        <div className="container-fluid">
            <div className="container-fluid">
                <Carousel style={{ marginTop: '100px' }}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img1} alt="First slide" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img2} alt="First slide" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img1} alt="First slide" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img2} alt="First slide" width="100%" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container-fluid" style={{ marginTop: '50px', marginBottom: '50px' }}>
                <Row xs={2} md={4} className="g-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={img3} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content.
                                    </Card.Text>
                                    <Button variant="primary" >Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Home
