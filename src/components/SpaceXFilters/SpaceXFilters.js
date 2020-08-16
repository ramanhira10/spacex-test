import React from 'react';
import {
  SpaceXFiltersComponent,
  FilterHeading,
  LaunchYears,
  LaunchSuccess
} from './styles';
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
    <SpaceXFiltersComponent>
        <h2>Filters</h2>
        
        <FilterHeading>Launch Year</FilterHeading>
        <LaunchYears>{allLaunchYears}</LaunchYears>

        <FilterHeading>Successful Launch</FilterHeading>
        <LaunchSuccess>
          <ButtonComponent isLaunchedSuccessfully={isLaunchedSuccessfully}>True</ButtonComponent>
          <ButtonComponent isLaunchedSuccessfully={isLaunchedSuccessfully}>False</ButtonComponent>
        </LaunchSuccess>
      </SpaceXFiltersComponent>
  );
};

export default SpaceXFilters;