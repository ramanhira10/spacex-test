import React from 'react';

import {
  Program,
  ImageContainer,
  ImageElement, 
  ProgramDetails,
  ProgramHeading,
  ProgramIDs,
  LaunchYear,
  LaunchSuccess
} from './styles';

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
    <Program>
      
      <ImageContainer>
        <ImageElement
          src={links.mission_patch_small}
          alt="No data available"
        />
      </ImageContainer>

      <ProgramDetails>
        <h4>{mission_name + ' ' + flight_number}</h4>
        
        {
          mission_id &&
          mission_id.length > 0 &&
          <>
            <ProgramHeading>Mission ids:</ProgramHeading>
            <ProgramIDs>
              {
                mission_id.map(mid => (<li key={mid}>{mid}</li>))
              }
            </ProgramIDs>  
          </>
        }
        <ProgramHeading>Launch Year: <LaunchYear>{launch_year}</LaunchYear></ProgramHeading>
        <ProgramHeading>Successful Launch: <LaunchSuccess>{launch_success ? 'True' : 'False'}</LaunchSuccess></ProgramHeading>
      </ProgramDetails>
    </Program>
  );
};

export default ProgramComponent;