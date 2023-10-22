import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import TermPage from './components/Term_page';
import { useDbData } from './utilities/firebase';

const queryClient = new QueryClient();
const Main = () => {
  // const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  const [data, error] = useDbData('/');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  // if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No course data found</h1>;
  return (
    <div className="App">      
      <Banner title={data.title} />
      <TermPage courses={data.courses} />
      
    </div>
  );
  
}

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
  
};

export default App;

