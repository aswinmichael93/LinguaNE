import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [appLanguage, setAppLanguage] = useState('en');
  const [sourceLanguage, setSourceLanguage] = useState(null);
  const [targetLanguage, setTargetLanguage] = useState(null);
  const [feedbackCount, setFeedbackCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('linguane_user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        appLanguage,
        setAppLanguage,
        sourceLanguage,
        setSourceLanguage,
        targetLanguage,
        setTargetLanguage,
        feedbackCount,
        setFeedbackCount
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
