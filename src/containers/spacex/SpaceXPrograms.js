import React, {useState, useEffect} from 'react';
import './styles.css';

import {
  getSpaceXPrograms,
  getFilteredSpaceXPrograms
} from '../../services/SpaceXApis';

import NavComponent from '../../components/NavComponent/NavComponent';
import SpaceXFilters from '../../components/SpaceXFilters/SpaceXFilters';
import Programs from '../../components/Programs/Programs';

const SpaceXPrograms = () => {
  
  const [spaceXPrograms, setSpaceXPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [filterYear, setFilterYear] = useState();
  const [filterLaunchedSuccessfully, setFilterLaunchedSuccessfully] = useState();

  const getFilterYear = year => {
    setFilterYear(year);
  };

  const isLaunchedSuccessfully = isLaunchedOk => {
    setFilterLaunchedSuccessfully(isLaunchedOk);
  };

  useEffect(() => {
    setIsLoading(true);
    getSpaceXPrograms().then(allPrograms => {
      setSpaceXPrograms(allPrograms);
      setIsLoading(false);    
    });
      
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getFilteredSpaceXPrograms(filterYear, filterLaunchedSuccessfully).then(allPrograms => {
      setSpaceXPrograms(allPrograms);
      setIsLoading(false);    
    });
      
  }, [filterYear, filterLaunchedSuccessfully]);

  return isLoading ? (
    <div className="loader">Loading ...</div>
  ) : (
    <div className="spacex-programs">
      
      <NavComponent />

      <SpaceXFilters
        getFilterYear={getFilterYear}
        isLaunchedSuccessfully={isLaunchedSuccessfully}
      />

      <Programs spaceXPrograms={spaceXPrograms}/>     
    </div>
  );
};

export default SpaceXPrograms;