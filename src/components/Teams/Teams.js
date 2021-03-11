import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardDeck } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Team.css'

const Teams = (props) => {
    console.log(props.team)
    const {idTeam, strTeamLogo, strTeam, strSport} = props.team;
    const history = useHistory();

    const  handleClick = (teamId) =>{
        const url = `/team/${teamId}`
        history.push(url);
    }
  return (
         <div className="container-card">
         <CardDeck>
           <Card className="card-content">
            <Card.Img variant="top" src={strTeamLogo} style={{width:'200px', textAlign:'center'}} />
             <Card.Body>
                <Card.Title>{strTeam}</Card.Title>
                <Card.Text>Sports type {strSport}</Card.Text>
                <button className='btn-style' style={{textAlign:'center', margin:'auto'}} onClick={() => handleClick(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
             </Card.Body>
            
        </Card>
    </CardDeck>
         </div>
    );
};

export default Teams;