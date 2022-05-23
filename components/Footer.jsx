import Image from 'next/image'

import logo from "../images/logo.png";

const Footer = () => {
    return (
        <footer className='max-w-[1224px] pt-[80px] px-[8.33333vw] pb-[32px] border-solid border-t-[1px] border-slate-800/10'>
            <div className='flex justify-between align-center mb-[32px] md:mb-[80px]'>
            <a className='cursor-pointer'>
                <div className='flex'>
                    <div className='flex mr-[10px] items-center justify-center'>
                        <Image 
                            alt="logo"
                            height={38}
                            width={38}
                            src={logo}
                            className="drop-shadow"
                        />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-[1.4rem]'>Fasanara Capital</h1>
                    </div>
                </div>
            </a>
            </div>
                <div className='flex text-[15] md:text-[17px]'>
                    <div className='col-md-lg-15'>
                        <ul className='list-none '>
                            <li className='md:mr-[16px] mr-[52px] footer__links-item mb-[8px]'>
                                <a className='border-b-2 border-transparent hover:border-b-[1px] hover:border-[#e42313] cursor-pointer pb-[3px]' href='#'>Contact Us</a>
                            </li>
                            <li className='md:mr-[16px] mr-[52px]  footer__links-item mb-[8px]'>
                                <a className='border-b-2 border-transparent hover:border-b-[1px] hover:border-[#e42313] cursor-pointer pb-[3px]' href='#'>Disclaimer</a>
                            </li>
                            <li className='mr-[16px] footer__links-item mb-[8px]'>
                                <a className='border-b-2 border-transparent hover:border-b-[1px] hover:border-[#e42313] cursor-pointer pb-[3px]' href='#'>Privacy Policy</a>
                            </li>
                            <li className='mr-[16px] footer__links-item mb-[8px]'>
                                <a className='border-b-2 border-transparent hover:border-b-[1px] hover:border-[#e42313] cursor-pointer pb-[3px]' href='#'>ESG</a>
                            </li>
                        </ul>
                    </div>
                    <ul className='list-none md:mt-0 col-md-lg-5 md:text-right'>
                        <li className='md:mr-[16px] footer__links-item mb-[8px]'>
                            <a className='border-b-2 border-transparent hover:border-b-[1px] hover:border-[#e42313] cursor-pointer pb-[3px]' href='#'>Twitter
                            <svg className='md:visible invisible inline-block md:ml-[4px]' xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                                    <rect x="3" fill="transparent" width="9" height='1' stroke="currentColor">
                                    </rect>
                                    <rect x="12" fill="transparent" width="9" height='1' transform='rotate(90 12 0)' stroke="currentColor">
                                    </rect>
                                    <rect x="11.7422" y='0.960938' fill="transparent" width="15.6047" height='1' transform='rotate(135 11.7422 0.960938)' stroke="currentColor">
                                    </rect>
                                </svg> 
                            </a>
                        </li>
                        <li className='inline-block footer__links-item'>
                        <a className='border-b-2 border-transparent hover:border-b-[1px] hover:border-[#e42313] cursor-pointer pb-[3px]' href='#'>LinkedIn
                            <svg className='md:visible invisible inline-block md:ml-[4px]' xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                                    <rect x="3" fill="transparent" width="9" height='1' stroke="currentColor">
                                    </rect>
                                    <rect x="12" fill="transparent" width="9" height='1' transform='rotate(90 12 0)' stroke="currentColor">
                                    </rect>
                                    <rect x="11.7422" y='0.960938' fill="transparent" width="15.6047" height='1' transform='rotate(135 11.7422 0.960938)' stroke="currentColor">
                                    </rect>
                                </svg> 
                            </a>
                        </li>
                    </ul>
                </div>
            <div>
            </div>
        </footer>
    )
} 

export default Footer;