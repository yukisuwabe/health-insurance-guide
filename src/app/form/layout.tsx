import React from 'react';
import NavBar from '@/app/ui/nav-links';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="form-layout" style={{ height: '100vh' }}>
      <NavBar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;