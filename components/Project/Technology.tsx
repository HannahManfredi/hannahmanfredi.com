
type TechnologyProps = {
    tech: string
    idx: number,
    length: number
    }
    
    export const Technology = ({
    tech,
    idx,
    length
    }: TechnologyProps) => {

    return (
        <li className={`font-light text-lg text-amber-400 ${idx === length - 1 ? 'mb-8' : 'mb-0'} ${idx === 0 ? 'mt-2' : 'm1-0'} `}>
        {tech}

        </li>
    )
}