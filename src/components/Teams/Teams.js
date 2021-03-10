import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardDeck } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
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
        
    <CardDeck>
      <Card>
            <Card.Img variant="top" src={strTeamLogo}  />
            <Card.Body>
            <Card.Title>{strTeam}</Card.Title>
            <Card.Text>Sports type {strSport}</Card.Text>
            </Card.Body>
      </Card>
    </CardDeck>
      /*   <div className='container-team'>
          
           <div className='cards'>
                <div className='card'>
                    <div className='content'>
                        <div className="img">
                            <img src={strTeamLogo} alt="club logo" />
                        </div>
                    <div className='details'>
                    <h1 className='name'>{strTeam}</h1>

                        <p>Sports type {strSport}</p>
                        <button className='btn-style' onClick={() => handleClick(idTeam)}>Explore</button>
                    </div>
                    </div>
                  
                </div>
           </div>
            
        </div> */


    );
};

export default Teams;