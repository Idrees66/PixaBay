import React from 'react';
import { Footer, FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';
import { Link } from 'react-router-dom';
import './Footer.css';


const footer = () => {
    return ( 
        
        <div>

          
    
        <Footer size="mega">
            <FooterSection type="middle">
                <FooterDropDownSection title="Features">
                    <FooterLinkList>
                        <Link to="/">About</Link>
                        <Link to="/">Terms</Link>
                        <Link to="/">Partners</Link>
                        <Link to="/">Updates</Link>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Details">
                    <FooterLinkList>
                        <Link to="/">Specs</Link>
                        <Link to="/">Tools</Link>
                        <Link to="/">Resources</Link>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Technology">
                    <FooterLinkList>
                        <Link to="/">How it works</Link>
                        <Link to="/">Patterns</Link>
                        <Link to="/">Usage</Link>
                        <Link to="/">Products</Link>
                        <Link to="/">Contracts</Link>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="FAQ">
                    <FooterLinkList>
                        <Link to="/">Questions</Link>
                        <Link to="/">Answers</Link>
                        <Link to="/">Contact us</Link>
                    </FooterLinkList>
                </FooterDropDownSection>
            </FooterSection>
            <FooterSection type="bottom" logo="Title">
                <FooterLinkList>
                    <Link to="/">Help</Link>
                    <Link to="/">Privacy & Terms</Link>
                </FooterLinkList>
            </FooterSection>
        </Footer>
        </div>
     );
}
 
export default footer;