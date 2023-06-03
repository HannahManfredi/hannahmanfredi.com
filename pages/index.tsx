import Head from "next/head"
import { NavBar } from "components/NavBar/NavBar"
import { Project } from "components/Project/Project"
import { PROJECTS } from "constants/projects"


export default function Home() {

  return (
    <>
      <Head>
        <title>HannahManfredi.com</title>
      </Head>
      <NavBar /> 
      <div className="flex text-slate-100 text-lg lg:text-xl items-start px-12 lg:px-60">Hannah Manfredi</div>
      <section className="overflow-hidden bg-black dark:bg-gray-900 w-screen flex flex-col items-center px-12 lg:px-60">
             <div className="flex flex-col pb-8">
                <h1 className="leading-tight mt-6 lg:mt-14 lg:mt-20 text-[8.3vw] md:text-[5.3vw] lg:text-[3.3vw] text-zinc-500 mb-2">
                  I&apos;m a full-stack product engineer in Nashville, Tennessee
                  specializing in user interfaces, software development and building businesses.{" "} 
                <br/>             
                </h1>
                <div className="text-white mt-2 lg:mt-8 text-[8.3vw] md:text-[5.3vw] lg:text-[3.3vw]">
                  <a className="decoration-indigo-600 underline-offset-8 decoration-2 hover:underline" href='/inquiries'>Contact me</a> to discuss your next project! 
                </div>
                <span className="text-amber-400 text-lg lg:text-xl pt-20 md:pt-30 lg:pt-36">Below is a selection of my work. </span>
             </div>
      

          <section className="min-w-800 mb-40 flex flex-col gap-10">
            <Project project={PROJECTS[2]}></Project>
            <Project project={PROJECTS[1]}></Project>
            <Project project={PROJECTS[0]}></Project>           
          </section>
          

      </section>
    </>
  )
}
