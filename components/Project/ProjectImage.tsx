import cn from 'classnames';
import Image from 'next/image'

type Props = {
  title: string
  src: string
  height: number
  width: number
}

const ProjectImage = ({ title, src, height, width }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Project Image for ${title}`}
      className={cn('shadow-sm w-full hover:shadow-lg transition-shadow duration-200'
      )}
      width={width}
      height={height}
      priority
      quality={95}
      unoptimized
    />
  )
  return (
    <div className="min-h-full min-w-600 object-cover mb-24"> 
        {image}
    </div>
  )
}

export default ProjectImage
