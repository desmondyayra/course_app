import React from 'react';
import { useAuthState, signInWithGoogle, firebaseSignOut } from '../utilities/firebase';

const Banner = () => {
  const [user] = useAuthState();

  return (
    <div className="banner-container">
      <h1>Your App Title</h1>
      {user ? (
        <button className="google-signin-btn" onClick={firebaseSignOut}>Sign Out</button>
      ) : (
        <button className="google-signin-btn" onClick={signInWithGoogle}>Sign In</button>
      )}
    </div>
  );
};

export default Banner;
