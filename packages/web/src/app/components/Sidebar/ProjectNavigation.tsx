/* AdjustmentsHorizontalIcon,
	ArrowTrendingUpIcon,
	BoltIcon,
	CursorArrowRaysIcon,
	PencilIcon,
	UserGroupIcon,
	UserIcon, */
import {
	XMarkIcon,
} from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
/* import NavigationLink from "./NavigationLink"
 */
const variants = ({ closeX = -300, openX = 0} : { openX?: number, closeX?: number }) => {
	return {
		close: {
			x: closeX,
			opacity: 0,
		},
		open: {
			x: openX,
			opacity: 100,
		  },
	}
}

interface Props {
	selectedProject: string
	isOpen: boolean
	setSelectedProject: (project: string | null) => void
}

const ProjectNavigation = ({ selectedProject, isOpen, setSelectedProject }: Props) => {
  	return (
    	<motion.nav
			variants={variants({
				openX: isOpen ? 30 : 0,
			})}
			initial="close"
			animate="open"
			exit="close"
      		transition={{
				duration: 0.25,
				ease: "easeInOut",
			}}
      		className={`h-full overflow-hidden flex flex-col gap-8 w-64 absolute top-0 bg-neutral-900 ml-0 ${ isOpen ? "left-64" : "left-20" } border-r border-neutral-800 p-5`}
    	>
      		<div className="flex flex-row w-full justify-between place-items-center">
				<h1 className="tracking-wide text-neutral-100 text-lg">
					{selectedProject}
				</h1>
				<button onClick={() => setSelectedProject(null)}>
					<XMarkIcon className="w-8 stroke-neutral-400" />
				</button>
      		</div>
			<input
				placeholder="Search"
				type="text"
				className="px-3 py-2 tracking-wide rounded-lg bg-neutral-600/40 text-neutral-100"
			/>
			{/* <div className="flex flex-col gap-3">
				<NavigationLink name="Progress" icon={ArrowTrendingUpIcon} to="#" close />
				<NavigationLink name="Team Members" icon={UserGroupIcon} to="#" close />
				<NavigationLink name="In Review" icon={PencilIcon} to="#" close />
				<NavigationLink name="In Progress" icon={BoltIcon} to="#" close />
				<NavigationLink name="Up Next" icon={CursorArrowRaysIcon} to="#" close />
				<NavigationLink name="Project Settings" icon={AdjustmentsHorizontalIcon} to="#" close />
      		</div>
			<div className="flex flex-col gap-5">
				<h1 className="tracking-wide text-neutral-300">Team Members</h1>
				<a href="#" className="flex flex-row gap-3 place-items-center">
					<UserIcon className="w-8 p-1 rounded-full stroke-2 stroke-rose-800 bg-rose-200/70" />
					<p className="tracking-wide text-neutral-400">Steve Jobs</p>
				</a>
				<a href="#" className="flex flex-row gap-3 place-items-center">
					<UserIcon className="w-8 p-1 rounded-full stroke-2 stroke-emerald-800 bg-emerald-200/70" />
					<p className="tracking-wide text-neutral-400">Bill Gates</p>
				</a>
				<a href="#" className="flex flex-row gap-3 place-items-center">
					<UserIcon className="w-8 p-1 rounded-full stroke-2 stroke-indigo-800 bg-indigo-200/70" />
					<p className="tracking-wide text-neutral-400">Jeff Bezos</p>
				</a>
      		</div> */}
    	</motion.nav>
  	)
}

export default ProjectNavigation
