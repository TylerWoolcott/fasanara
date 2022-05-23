import Image from "next/image"

import performance from "../images/performance.svg"

const Performance = () => {
    return (
        <div className='py-[80px] px-[8.33333vw] '>
            <div className='lg:flex max-w-[1224px] mx-auto justify-between items-center'>
                <div className="lg:w-[40%] mb-[60px] lg:mb-0">
                    <p className='text-[32px] font-bold mb-[32px]'>
                    Exceptional Performance
                    </p>
                    <p className="text-[18px]">
                    Benefit from what institutional investors already know: the greatest shareholder value comes from private markets, and funds like those offered on Fasanara have generated an average IRR of 19% — outperforming the S&P 500 by 13%.
        ‍
                    With todays’ environment of negative interest rates, volatile public markets and difficult to source real estate deals, private equity offers investors a smart alternative. Fasanara breaks down the barriers with low minimums, a fully digital process and a unique Secondary Market.
                    </p>
                </div>
                <div className='flex lg:w-[48%] w-auto flex-col items-start auto-cols-fr'>
                    <Image 
                        src={performance}
                        alt="performance" 
                        height={600}
                        width={580}
                        objectFit="cover"
                        className='drop-shadow rounded'
                    />
                </div>
            </div>
        </div>
    )
}

export default Performance;