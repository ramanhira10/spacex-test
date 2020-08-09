import React from 'react';
import './styles.css';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const SpaceXFilters = props => {

  const {getFilterYear, isLaunchedSuccessfully} = props;

  const startinglaunchYear = 2006;
  const lastLaunchYear = 2020;

  const allLaunchYears = [];

  for (let i=startinglaunchYear;i<=lastLaunchYear;i++) {
    allLaunchYears.push(<ButtonComponent getFilterYear={getFilterYear} key={i}>{i}</ButtonComponent>)
  }

  return (
    <div className="spacex-filters">
        <h2>Filters</h2>
        
        <h3 className="filter-heading">Launch Year</h3>
        <div className="launch-years">
          {allLaunchYears}
        </div>

        <h3 className="filter-heading">Successful Launch</h3>
        <div className="launch-success">
          <ButtonComponent isLaunchedSuccessfully={isLaunchedSuccessfully}>True</ButtonComponent>
          <ButtonComponent isLaunchedSuccessfully={isLaunchedSuccessfully}>False</ButtonComponent>
        </div>
      </div>
  );
};

export default SpaceXFilters;