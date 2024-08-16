import { cn } from "@/core/lib/utils"
import { ChevronRightIcon } from "@heroicons/react/24/outline"

interface Props {
  icon: React.ElementType
  name: string
  close: boolean
  setSelectedProject: (val: string | null) => void
}

const ProjectLink = ({ icon: Icon, name, close, setSelectedProject }: Props) => {
  	const handleClick = () => {
    	setSelectedProject(null)
    	setTimeout(() => {
      		setSelectedProject(name)
    	}, 250)
  	}
  	return (
    	<li onClick={handleClick} className={cn("flex py-1.5 px-5 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100",
			!close && "w-max px-2 py-2 items-center justify-center rounded-md",
		)}>
      		<Icon className="stroke-inherit stroke-[0.75] min-w-7 w-7" />
			{close && (
				<div className="flex overflow-clip place-items-center justify-between w-full">
					<p className="text-inherit truncate whitespace-nowrap tracking-wide">
						{name}
					</p>
					<ChevronRightIcon className="stroke-inherit stroke-[0.75] min-w-5 w-5" />
				</div>
			)}
    	</li>
  )	
}

export default ProjectLink
