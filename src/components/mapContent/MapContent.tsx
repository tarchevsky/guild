import ImgText from '@/components/imgText/ImgText'
import { MapContentProps } from '@/types'

const MainComponent = ({ projectsData }: MapContentProps) => {
	return (
		<div className='grid gap-5'>
			{projectsData.map((project, index) => (
				<ImgText
					key={index}
					link={project.link}
					src={project.src}
					alt={project.alt}
					description={project.description}
					projectName={project.projectName}
				/>
			))}
		</div>
	)
}

export default MainComponent
