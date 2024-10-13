import { useEffect, useState } from "react";
import { FaArrowCircleUp } from 'react-icons/fa';
import { BackToTopContainer } from './Styled'

export const ScrollToTop = () => {
    const [isVisible, setVisible] = useState(false);
   
    const toggleVisibility = () => {
        
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    },[isVisible]);

    return (
        <BackToTopContainer isVisible={isVisible} onClick={scrollToTop}>
            <FaArrowCircleUp />
        </BackToTopContainer>
    );
};