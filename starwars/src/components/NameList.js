import React from "react";
import { Card, CardText, CardBody, CardTitle, Col} from "reactstrap";

export default function characterList (props){
    return(
        <Col>
            <Card className = "list">
                <CardBody>
                    <h3> Name: {props.name} </h3>
                    <CardText>Sex: {props.gender}</CardText>
                    <CardText>Height: {props.height}</CardText>
                    <CardText>Hair Color: {props.hair_color}</CardText>
                    <CardText>Eye Color: {props.eye_color}</CardText>
                    <CardText>Birth Year: {props.birth_year}</CardText>
                    <br/>
                    <br/>
                </CardBody>
            </Card>
        </Col>
    );
};