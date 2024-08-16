import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import NavigationLink from "./NavigationLink";
import ProjectLink from "./ProjectLink";
import ProjectNavigation from "./ProjectNavigation";
import { NAVLINK } from "@/core/static/navgation";
import { IconArrowRight } from "@tabler/icons-react";
import { cn } from "@/core/lib/utils";
import { UserIcon } from "@heroicons/react/24/outline";
import { useSession } from "@/core/hooks/auth";

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "18rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
}

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
}

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { data: loggedUser } = useSession();
	const [selectedProject, setSelectedProject] = useState<string | null>(null);

	const containerControls = useAnimationControls();
	const svgControls = useAnimationControls();

	useEffect(() => {
		if (isOpen) {
		containerControls.start("open")
		svgControls.start("open")
		} else {
			containerControls.start("close")
			svgControls.start("close")
		}
	}, [isOpen]);

	const handleOpenClose = () => {
		setIsOpen(!isOpen)
		setSelectedProject(null)
	}

	return (
		<>
			<motion.nav
				variants={containerVariants}
				animate={containerControls}
				initial="close"
				className="bg-neutral-900 flex flex-col z-10 gap-20 py-5 absolute top-0 left-0 h-full shadow shadow-neutral-600"
			>
				<div className="h-10 flex flex-row w-full items-center justify-between place-items-center px-5">
					<div className="w-10 h-10 bg-task-management-first flex items-center justify-center rounded-xl">
						<img src="/taskmanagement.svg" alt="logomarca taskmanagement" className="w-8 h-8" />
					</div>
					{isOpen && <h1 className="min-w-8 w-max text-nowrap">Task Management</h1>}
					<button
						className="p-1 rounded-full flex"
						onClick={() => handleOpenClose()}
					>
						<motion.div  className="w-8 h-8"
								variants={svgVariants}
								animate={svgControls}
								transition={{
									duration: 0.5,
									ease: "easeInOut",
								}}>
							<IconArrowRight size={24} />
						</motion.div>
					</button>
				</div>
				<div className={cn("flex flex-col gap-3", !isOpen && "mx-auto")}>
					{NAVLINK.map((link, index) => link.href ? (
						<NavigationLink key={index} to={link.href}
							icon={link.icon}
							name={link.label}
							close={isOpen}
						/>
						) : (
							<ProjectLink key={index} 
								name={link.label} 
								setSelectedProject={setSelectedProject} 
								close={isOpen}
								icon={link.icon}
							/>
						)
					)}
				</div>
				<div className={cn("flex flex-row gap-3 place-items-center px-5", !isOpen && "items-center justify-center")}>
					<UserIcon className="w-9 p-1 rounded-full stroke-2 stroke-blue-500 bg-task-management-first/70" />
					{isOpen && (
						<div>
							<span className="block first-letter:uppercase tracking-wide text-neutral-400 text-nowrap">{loggedUser?.name}</span>
							<span className="block text-sm tracking-wide text-neutral-500 text-nowrap">{loggedUser?.email}</span>
						</div>
					)}
				</div>
      		</motion.nav>
			<AnimatePresence>
				{selectedProject && (
					<ProjectNavigation
						selectedProject={selectedProject}
						setSelectedProject={setSelectedProject}
						isOpen={isOpen}
					/>
				)}
			</AnimatePresence>
    	</>
  	)
}
