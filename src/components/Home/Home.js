import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Home/Hero'
import Card from '../Card/Card'
import TechStack from '../Card/TechStack'
import Section from '../Section/Section'
import DBDesk from '../../images/db-desk.png'
import DBTablet from '../../images/db-tablet.png'
import DBPhone from '../../images/db-phone.png'
import SectionCard from '../Section/SectionCard'
import CustomLink from '../Misc/CustomLink'
import Waves from '../Misc/Waves'
import Footer from '../Misc/Footer'

export default function Home() {
    return (
        <>
            
            <Navbar />
            <Hero />
            <Waves />
            <div>
                <div className="cta">
                    <Card background="white" title="Tech Stack" >
                        <TechStack />
                        <CustomLink linkText="View GitHub Account" link="https://github.com/Navkcalbeht32" target="_blank"/>
                    </Card>
                    <Card background="gray" title="Portfolio"  >
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <CustomLink linkText="View Portfolio" link='/' />
                    </Card>
                </div>
                <div className="section-background" />
                <Section 
                    title="Fast & Responsive"
                    subtitle="I build sites for desktop & mobile devices, with speed and user experience prioritized"
                >
                    <div className="section-cards">
                        
                        <SectionCard title="Search Engine Optimization" text="I build sites for desktop & mobile devices, with speed and user experience prioritized">
                            <CustomLink linkText="My SEO Strategy" link="" />
                        </SectionCard>
                        
                        <SectionCard title="Server-Side Rendering" text="I build sites for desktop & mobile devices, with speed and user experience prioritized" >
                            <CustomLink linkText="Server-Side Tools" link="" />
                        </SectionCard>
                    </div>

                    <div className="section-images">
                        <img className="desk" src={DBDesk} />
                        <img className="tablet" src={DBTablet} />
                        <img className="phone" src={DBPhone} />
                    </div>

                </Section>
                <Footer />
            </div>
        </>
    )
}   