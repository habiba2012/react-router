import React from 'react';
import { useParams} from 'react-router-dom';


const TeamDetails = () => {
    const {teamId} = useParams()

    return (
        <div>
            <h3>details {teamId}</h3>
        </div>
    );
};

export default TeamDetails;