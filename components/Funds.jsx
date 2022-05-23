import Fintech from "./CardTypes/Fintech";
import Quant from "./CardTypes/Quant";
import Digital from "./CardTypes/Digital";
import Ventures from "./CardTypes/Ventures";
 
  const Funds = () => {
  
    return (
      <>
      <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
        <div className="flex flex-col md:p-[70px] py-12 pl-[1rem] pr-[3rem]">
          <div className="flex flex-wrap justify-center items-center mt-10">
              <Fintech />
              <Quant />
              {/* <Digital /> */}
              <Ventures />
          </div>
        </div>
      </div>
      </>
    );
  };
  

export default Funds;