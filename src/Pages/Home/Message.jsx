// import React from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import '../../App.css'

const Message = () => {
  return (
    <Container className="pt-5">
      <h2>
        Welcome to the Dept. of Information & Communication Engineering (ICE)
      </h2>
      <Row className="pt-5">
        <Col>
        <Card className="p-2">
        <div>
        <h4>Message from Chairman</h4>
           <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdFe2l5yrU1Bd9lao2sMQTAFu0XVbDxk0GVQ&usqp=CAU"
              alt=""  className="float-start m-2"
            />
            <p className=" mt-5 name">Md. Alamgir Hossain, Ph.D.</p>
            <p className="message_text mt-4">The Department of Information and Communication Technology aims to prepare students  to become engineers and equip them with the knowledge of the Fourth Industrial Revolution (4IR) in order to serve society, the country and more. To achieve this, the department offers students engineering courses that can be ideally applied to the rapidly changing sectors such as Big Data, Machine Learning, Artificial Intelligence, Blockchain, Cloud Computing, Cyber-security and so on. </p>
            <Button variant="info " className="btn-lg text-light">Read More</Button>
           </div>
           
        </Card>
         
      
           
         
        </Col>
        <Col>
        <Card className="p-2">
        <div>
        <h4>Latest Notices</h4>

        <Card className="mb-3">
            <div className=" d-inline-flex">
            <p className="date m-1"> May 9</p>
            <p className="m-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas temporibus laborum rerum nulla illo dolor. </p>
            </div>
        </Card>
        <Card className="mb-3">
        <div className=" d-inline-flex">
            <p className="date m-1"> May 9</p>
            <p className="m-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas temporibus laborum rerum nulla illo dolor. </p>
            </div>
        </Card>

        <Card className="mb-3">
        <div className=" d-inline-flex">
            <p className="date m-1"> May 9</p>
            <p className="m-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas temporibus laborum rerum nulla illo dolor. </p>
            </div>
        </Card>

        <Card className="mb-3">
        <div className=" d-inline-flex">
            <p className="date m-1"> May 9</p>
            <p className="m-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas temporibus laborum rerum nulla illo dolor. </p>
            </div>
        </Card>
        <Card>
        <div className=" d-inline-flex">
            <p className="date m-1"> May 9</p>
            <p className="m-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas temporibus laborum rerum nulla illo dolor. </p>
            </div>
        </Card>

        <Button variant="info " className="btn-lg text-light mt-2 ">All Notice</Button>
    
        </div>
        
           
        </Card>
       
        
        </Col>
      </Row>
    </Container>
  );
};

export default Message;
