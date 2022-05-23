const Companies = () => {
    return (
        <div className='my-[80px] px-[8.33333vw] text-center'>
            <h2 className='text-[1.4rem] leading-[3rem] text-center mb-[32px] md:mb-[22px]'>
                Our relationships span oceans and industries.
            </h2>
            <div className='max-w-[1400px]'>
                <ul className='md:grid grid-cols-[repeat(3,_1fr)] list-none'>
                    <li className='text-[2rem] md:text-[2.5rem] tracking-[0.02em] leading-[4.4rem] md:mt-[18px]'>
                        <a className="border-b-2 border-transparent hover:border-b-[1px] hover:border-[#e42313] cursor-pointer pb-[3px]">
                            Grover
                        </a>
                    </li>
                    <li className='text-[2rem] md:text-[2.5rem] tracking-[0.02em] leading-[4.4rem] md:mt-[18px]'>
                        <a className="border-b-2 border-transparent hover:border-b-[1px] hover:border-[#e42313] cursor-pointer pb-[3px]">
                            Scalapay
                        </a>
                    </li>
                    <li className='text-[2rem] md:text-[2.5rem] tracking-[0.02em] leading-[4.4rem] md:mt-[18px]'>
                        <a className="border-b-2 border-transparent hover:border-b-[1px] hover:border-[#e42313] cursor-pointer pb-[3px]">
                            Twig
                        </a>
                    </li>
                    <li className='text-[2rem] md:text-[2.5rem] tracking-[0.02em] leading-[4.4rem] md:mt-[18px]'>
                        <a className="border-b-2 border-transparent hover:border-b-[1px] hover:border-[#e42313] cursor-pointer pb-[3px]">
                            Farfetch
                        </a>
                    </li>
                    <li className='text-[2rem] md:text-[2.5rem] tracking-[0.02em] leading-[4.4rem] md:mt-[18px]'>
                        <a className="border-b-2 border-transparent hover:border-b-[1px] hover:border-[#e42313] cursor-pointer pb-[3px]">
                            Figma
                        </a>
                    </li>
                    <li className='text-[2rem] md:text-[2.5rem] tracking-[0.02em] leading-[4.4rem] md:mt-[18px]'>
                        <a className="border-b-2 border-transparent hover:border-b-[1px] hover:border-[#e42313] cursor-pointer pb-[3px]">
                            Robinhood
                        </a>
                    </li>
                </ul>
                    <div className='mt-[32px] md:mt-[64px]'>  
                        <a className='text-[#181818] border-[1px] border-[#e42313] cursor-pointer rounded-[101px] min-w-[218px] py-[14px] px-[32px] md:py-[20px] md:px-[77px]'>
                            And many others
                        </a>
                    </div>
            </div>
        </div>
    )
} 

export default Companies;