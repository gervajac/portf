import React from 'react';
import Logo from "../assets/logo2.webp";

const Header = () => {
            return <header className="py-8">
                      <div className='container mx-auto'>
                          <div className='flex justify-between items-center'>
                              <a href="#">
                                  <img className='h-10' src={Logo} alt=""/>  
                              </a>
                                <button className="btn btn-sm">work with me</button>
                          </div>
                      </div>
                  </header>;
};

export default Header;
