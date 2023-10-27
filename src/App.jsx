import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import TermPage from './components/Term_page';
import { useDbData } from './utilities/firebase';
import { signInWithGoogle, firebaseSignOut } from './utilities/firebase';
// import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { useProfile } from './components/profile';


const queryClient = new QueryClient();
const Main = () => {
  // const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  const [data, error] = useDbData('/');
  const [profile, profileLoading, profileError] = useProfile();
  
  if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
  if (profileLoading) return <h1>Loading user profile</h1>;
  if (!profile) return <h1>No profile data</h1>;

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  // if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No course data found</h1>;
  return (
    <div className="App">      
      <Banner title={data.title} />
      <TermPage courses={data.courses} profile={profile} />
      
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

