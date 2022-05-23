import Image from 'next/image'

import city from "../images/city.jpg";
import subway from "../images/subway.jpg";

const Welcome = () => {
    return (
        <div className='pt-[160px] pb-[50px] px-[8.33333vw] text-center'>
            <div className=''>
                <ul className='md:grid grid-cols-[repeat(2,_1fr)] md:gap-28 list-none'>
                    <li className='mb-[64px]'>
                        <a href='#'>
                            <div className='mb-[32px]'>
                                <Image src={subway} 
                                    alt="subway"  
                                    height={480}
                                    width={720}
                                    objectFit="cover"
                                    className="cursor-pointer drop-shadow transition ease-in-out delay-150 hover:scale-110 duration-300" 
                                />
                            </div>
                            <span className=''>
                                <h3 className='text-[32px]'><span className='style-link style-link:hover'>Announcing our new fund for investing in crypto startups 🚀</span></h3>
                                <p className='mt-[16px]'>
                                    by Fasanara Capital
                                </p>
                            </span>
                        </a>
                    </li>
                    <li className=''>
                        <a href='#'>
                            <div className='mb-[32px]'>
                                <Image src={city} 
                                    alt="city"  
                                    height={480}
                                    width={720}
                                    className="cursor-pointer drop-shadow transition ease-in-out delay-150 hover:scale-110 duration-300" 
                                />
                            </div>
                            <span>
                                <h3 className='text-[32px]'><span className='style-link style-link:hover'>Business forum for alt funds: Importance of ESG</span></h3>
                                <p className='mt-[16px]'>
                                    by Martin Mignot, Shardul Shah
                                </p>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
} 

export default Welcome;