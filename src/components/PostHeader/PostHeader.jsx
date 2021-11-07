import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

const Header = ({children}) => {
    // determined if page has scrolled and if the view is on mobile
    const [scrolled, setScrolled] = useState(false);

    // change state on scroll
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 400;
            if (isScrolled !== scrolled) {
                setScrolled(!scrolled);
            }
        }

        document.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            // clean up the event handler when the component unmounts
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header id="post-head" className="post-single-header" data-active={scrolled}>
            <p className="stripe" />
            {children}
        </header>
    );
};

export default Header;
