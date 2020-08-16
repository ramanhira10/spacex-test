import React from 'react';

import {StyledProgramComponent, EmptyData} from './styles';

import ProgramComponent from '../ProgramComponent/ProgramComponent';

const Programs = ({spaceXPrograms}) => {

  return (
    <StyledProgramComponent>
      {
        spaceXPrograms &&
        spaceXPrograms.length > 0 ?
        spaceXPrograms.map(program => (
          <ProgramComponent
            key={program.flight_number}
            program={program}
          />
        )) : (
          <EmptyData>No data to display</EmptyData>
        )
      }
    </StyledProgramComponent>
  );
};

export default Programs;