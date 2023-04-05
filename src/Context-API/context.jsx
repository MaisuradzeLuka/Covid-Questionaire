import React from "react";

export const AuthContext = React.createContext({
  letters: /^$/,
  email: /^$/,
});

const AppContext = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        letters: /^[\u10D0-\u10FF]{3,}$/,
        email: /^[\w-\.]+@redberry\.ge$/,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AppContext;
