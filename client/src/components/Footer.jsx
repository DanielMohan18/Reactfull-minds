import React from 'react'
import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLink } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { FaFacebook,FaInstagram,FaTwitter,FaGithub,FaLinkedin } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
const Footere = () => {
  return (
    <Footer container className='border border-t-8 border-orange-200 '>
       <div className='w-full max-w-7xl mx-auto'>
          <div className='grid w-full justify-between sm:flex md:grid-cols-1 mb-2'>
            <div>
             <Link to='/' className=" self-center whitespace-nowrap text-lg sm:text-xl font-semibold ">
             <span className="px-2 py-1 bg-gradient-to-r from-amber-300 via-orange-300 to-red-300 rounded-xl text-white ">Reactfull</span>
              Minds
             </Link>
            </div>
            <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6 '>
            <div >
                <Footer.Title title='ABOUT'/>
                <Footer.LinkGroup col>
                    <FooterLink href='' target='_blank' rel='noopener noreferer' className=' hover:text-orange-400'>
                        Reactfull Minds
                    </FooterLink>
                    <FooterLink href='' target='_blank' rel='noopener noreferer' className=' hover:text-orange-400'>
                        NetflixGPT
                    </FooterLink>
                </Footer.LinkGroup>  
            </div>
            <div >
                <Footer.Title title='FOLLOW US'/>
                <Footer.LinkGroup col>
                    <FooterLink href='https://github.com/DanielMohan18' target='_blank' rel='noopener noreferer' className=' hover:text-orange-400'>
                        Github
                    </FooterLink>
                    <FooterLink href='https://www.linkedin.com/in/daniel-mohan-kavuri-59abb928a/' target='_blank' rel='noopener noreferer' className=' hover:text-orange-400'>
                        LinkedIN
                    </FooterLink>
                </Footer.LinkGroup>  
            </div>
            <div >
                <Footer.Title title='LEGAL'/>
                <Footer.LinkGroup col>
                    <FooterLink href='#' target='_blank' rel='noopener noreferer' className=' hover:text-orange-400'>
                        Privacy Policy
                    </FooterLink>
                    <FooterLink href='#' target='_blank' rel='noopener noreferer' className=' hover:text-orange-400'>
                        Terms & Conditions
                    </FooterLink>
                </Footer.LinkGroup>  
            </div>
            </div>
          </div>
          <Footer.Divider/>
          <div className='w-full mt-4 sm:flex  sm:items-center sm:justify-between'>
             <FooterCopyright  href='#' by=' Daniel Mohan.K' year={new Date().getFullYear()}/>
             <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-content'>
                <FooterIcon href='#' className='text-xl hover:text-orange-400' icon={FaFacebook}/>
                <FooterIcon href='https://www.instagram.com/d.a.n.i.e.l_m.o.h.a.n/?hl=en' className='text-xl hover:text-orange-400' icon={FaInstagram}/>
                <FooterIcon href='https://x.com/' className='text-xl hover:text-orange-400' icon={FaTwitter}/>
                <FooterIcon href='https://github.com/DanielMohan18' className='text-xl hover:text-orange-400' icon={FaGithub}/>
                <FooterIcon href='https://www.linkedin.com/in/daniel-mohan-kavuri-59abb928a/' className='text-xl hover:text-orange-400' icon={FaLinkedin}/>
                <FooterIcon href='#' className='text-xl hover:text-orange-400' icon={AiFillHeart}/>
             </div>
          </div>
       </div>
    </Footer>
  )
}

export default Footere;
