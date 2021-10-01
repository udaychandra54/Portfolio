import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className='container text-center'>
            <div className="header-wrapper">
                <h1>Personal portfolio</h1>
                <Typed className='fs-1' style={{color:'darkkhaki'}}
                    strings={[
                        'Web Developer',
                        'React Js',
                        'HTML',
                        'CSS'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
            </div>
        </div>
    )
}

export default Header
