import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export const NavBar =() => {
  const [isNavOpen, setIsNavOpen] = useState(false);
 
  return (
    <>
     <div className="pr-10 pl-1 lg:px-20 bg-black flex flex-row justify-between items-center pt-10 lg:pt-20 pb-5 lg:pb-10">
       <div className="flex self-center justify-center">
        <Link as={`/`} href="/"   >
          <Image priority quality={95} src="/assets/blog/logo/logo.png" alt='logo' width={200}  height={200} className="flex self-center justify-center mr-24" />
        </Link>
      </div>

      <nav>
        <ul className="DESKTOP-MENU hidden lg:flex text-slate-100 gap-10">
          <li className="decoration-indigo-600 underline-offset-8 decoration-2 hover:underline my-8 uppercase">
            <a target="_blank" rel="noreferrer" href="https://github.com/HannahManfredi">Github</a>
          </li>
          <li className="decoration-indigo-600 underline-offset-8 decoration-2 hover:underline my-8 uppercase">
            <a target="_blank" rel="noreferrer"  href="https://twitter.com/h7nn7h">Twitter</a>
          </li>
          <li className="decoration-indigo-600 underline-offset-8 decoration-2 hover:underline my-8 uppercase">
            <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/hannahmanfredi/">LinkedIn</a>
          </li>
          {/* <li className="decoration-indigo-600 underline-offset-8 decoration-4 hover:underline my-8 uppercase">
            <a href="/contact">Other Work</a>
          </li>
          <li className="decoration-indigo-600 underline-offset-8 decoration-4 hover:underline my-8 uppercase">
            <a href="/contact">Project Inquiries</a>
          </li> */}
        </ul>
  
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
          <li className="decoration-indigo-600 underline-offset-8 decoration-4 hover:underline my-8 uppercase">
            <a href="https://github.com/HannahManfredi">Github</a>
          </li>
          <li className="decoration-indigo-600 underline-offset-8 decoration-4 hover:underline my-8 uppercase">
            <a href="https://twitter.com/h7nn7h">Twitter</a>
          </li>
          <li className="decoration-indigo-600 underline-offset-8 decoration-4 hover:underline my-8 uppercase">
            <a href="https://www.linkedin.com/in/hannahmanfredi/">LinkedIn</a>
          </li>
          {/* <li className="decoration-indigo-600 underline-offset-8 decoration-4 hover:underline my-8 uppercase">
            <a href="/contact">Other Work</a>
          </li>
          <li className="decoration-indigo-600 underline-offset-8 decoration-4 hover:underline my-8 uppercase">
            <a href="/contact">Project Inquiries</a>
          </li> */}
        </ul>
           
          </div>
        </section>


      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
    </>
   
  );
}