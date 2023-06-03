import ProjectImage from './ProjectImage'
import { Technology } from './Technology'

interface ProjectInterface {
  title: string
  client: string
  coverImage: string
  technology: string[]
  url: string
}

type ProjectProps = {
  project: ProjectInterface
}

export const Project = ({
  project
}: ProjectProps) => {



  return (
 
    <div className="flex flex-col items-start min-w-800">
      <h3 className="mb-5 text-xl font-semibold leading-relaxed text-slate-100 pt-5 border-t-4 md:border-t-0">
      {project.title}
      </h3>
    <section className="flex flex-col md:flex-row gap-4 lg:gap-10 min-w-800 border-t-4 pt-4 lg:pt-8">
        <div className="md:flex md:flex-col md:gap-4">
        <h3 className="mt-2 mb-2 md:mb-0 md:mt-0 text-xl font-semibold leading-tight text-slate-100">
    CLIENT: 
    </h3>
    <span className='text-lg text-slate-100'><a href={project.url} rel="noreferrer" target="_blank">{project.client}</a></span>
    <h3 className="mt-4 text-xl font-semibold leading-tight text-slate-100">
      <ul >
        TECHNOLOGY:
        {project.technology.map((tech, i) => {
        
          return (<Technology tech={tech} idx={i} key={i}  length={project.technology.length}></Technology>) 
        
        })}
      </ul>
    </h3>
        </div>
 

  <ProjectImage title={project.title} src={project.coverImage} height={2500} width={2500}/>

</section>

    </div>
  )
}


