import { useState } from "react"


function App() {
  const [count, setCount]=useState(false);

function Ozgar(){
  count ? setCount(false): setCount(true);
  
}

  return (
    <div>
          <div className="flex items-center justify-around">
            <div >
              <img src="olcha.png" alt="" className='cursor-pointer w-[102px] h-[70px] '/>
            </div>
            <div onClick={Ozgar} className="flex ota items-center cursor-pointer gap-4 border-solid border-[2px] border-black py-2 px-5 rounded-xl hover:text-[red] hover:border-[red]">

              <div className="flex flex-col gap-1" >
                <div className={`w-5 h-[2px] bg-black red duration-300  ${count ? 'x1':""}`}></div>
                <div className={`w-5 h-[2px] bg-black red duration-300  ${count ? 'x3':""}`}></div>
                <div className={`w-5 h-[2px] bg-black red duration-300  ${count ? 'x2':""}`}></div>
              </div>
              <h2>Katalog</h2>

            </div>
            <div>

              <form action="#">
                <input type="text" className='bg-slate-200 h-[39px] w-96 rounded-xl px-3' />
                <button className='absolute bg-[red] py-[6px] px-5 rounded-xl ml-[-66px] m-[1px] hover:px-[21px] hover:ml-[-67px] hover:py-[7px] hover:mt-0'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(248,244,244,1)"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
                </button>
              </form>

            </div>
            <div onClick={Ozgar} className="flex flex-col justify-center items-center taqqoslash cursor-pointer">

            <svg height="20" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg" fill="black"><title/><path d="M104,496H72a24,24,0,0,1-24-24V328a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,104,496Z"/><path d="M328,496H296a24,24,0,0,1-24-24V232a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,328,496Z"/><path d="M440,496H408a24,24,0,0,1-24-24V120a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,440,496Z"/><path d="M216,496H184a24,24,0,0,1-24-24V40a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,216,496Z"/></svg>

              <h3 className=" font-normal texy-[10px] hover:text-[red]">Taqqoslash</h3>

            </div >
            <div className="flex flex-col justify-center items-center taqqoslash cursor-pointer" onClick={Ozgar}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
            <h3>Sevimlilar</h3>
              
            </div>
            <div onClick={Ozgar} className=" cursor-pointer flex flex-col justify-center items-center taqqoslash before:content-['0']  before:absolute  before:w-4 before:h-4 before:text-center before:text-[12px] before:text-white before:rounded-2xl before:bg-[red] before:mb-[38px] before:mr-[-24px]">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>
            <h3 >Savatcha</h3>
              
            </div >
            <div onClick={Ozgar} className=" cursor-pointer flex flex-col justify-center items-center taqqoslash">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
            <h3>Kirish</h3>
            </div>
          </div>
          <div className={`block w-[100vw]  bg-slate-500 duration-300 h-[600px]  ${count ? 'h':'opacity-0'}`}></div>
    </div>
  )
}

export default App