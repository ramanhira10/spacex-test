import React from 'react';

import './styles.css';

const ProgramComponent = ({program}) => {

  const {
    links,
    launch_success,
    launch_year,
    mission_name,
    mission_id,
    flight_number
  } = program;

  return (
    <div className="program">
      <div className="img">
        <img src={links.mission_patch_small} alt="No data available" />
      </div>  
      <div>
        <h4>{mission_name + ' ' + flight_number}</h4>
        
        {
          mission_id &&
          mission_id.length > 0 &&
          <>
            <p className="heading">Mission ids:</p>
            <ul className="program-ids">
              {
                mission_id.map(mid => (<li key={mid}>{mid}</li>))
              }
            </ul>  
          </>
        }
        <p className="heading">Launch Year: <span>{launch_year}</span></p>
        <p className="heading">Successful Launch: <span>{launch_success ? 'True' : 'False'}</span></p>
      </div>
    </div>
  );
};

export default ProgramComponent;