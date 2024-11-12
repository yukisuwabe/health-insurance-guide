import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="form-layout" style={{ height: '100vh' }}>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;