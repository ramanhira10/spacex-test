import React from 'react';
import './styles.css';
import ProgramComponent from '../ProgramComponent/ProgramComponent';

const Programs = ({spaceXPrograms}) => {

  return (
    <div className="programs">
      {
        spaceXPrograms &&
        spaceXPrograms.length > 0 ?
        spaceXPrograms.map(program => (
          <ProgramComponent
            key={program.flight_number}
            program={program}
          />
        )) : (
          <div className="empty-data">No data to display</div>
        )
      }
    </div>
  );
};

export default Programs;