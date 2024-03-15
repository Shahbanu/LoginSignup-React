import React from 'react'

const AuthRoute = ({children}) => {
    const islogin = false;{/*change to true for access*/}
    if(!islogin) return <h2>Access Denied<br></br>(admin only)contact admin for access</h2>
  return <div>
        {children}
    </div>;
};

export default AuthRoute