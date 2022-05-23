import Image from "next/image";
import digital from "../../images/digital.jpeg";

const Digital = () => {
  
    return (
        <>
        <a href="#">
            <div className="bg-[#181918] m-4 flex flex-1
                2xl:min-w-[450px]
                2xl:max-w-[500px]
                sm:min-w-[270px]
                sm:max-w-[300px]
                min-w-full
                flex-col p-3 rounded-md hover:shadow-2xl"
            >
                <div className="flex flex-col items-center w-full mt-3">
                <div className="display-flex justify-start w-full mb-6 p-2">
                    <p className="text-[1.4rem] text-center mb-[12px] text-white font-bold">Fasanara Digital</p>
                    <p className="text-center mb-[2px] text-white">Digital Assets</p>
                    <p className="text-center mb-[2px] text-white">Arbitrage</p>
                </div>
                <Image src={digital} 
                    alt="digital"  
                    height={480}
                    width={720}
                    objectFit="cover"
                    className="rounded-md cursor-pointer drop-shadow transition ease-in-out delay-150 hover:scale-110 duration-300" 
                />
                </div>
            </div>
        </a>
        </>
    );
  };

  export default Digital;