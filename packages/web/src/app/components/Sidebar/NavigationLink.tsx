import { cn } from "@/core/lib/utils";
import { Link } from "react-router-dom";

interface Props {
	to: string
  	icon: React.ElementType
  	name: string
  	close: boolean
}

const NavigationLink = ({ to, icon: Icon, name, close }: Props) => {
  	return (
    	<Link to={to} className={cn("flex py-1.5 px-5 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100",
			!close && "w-max px-2 py-2 items-center justify-center rounded-md",
		)}>
			<Icon className="stroke-inherit stroke-[0.75] min-w-7 w-7" />
      		{close && (
				<>
					<p className="flex-1 text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide">
						{name}
					</p>
				</>
			)}
    	</Link>
  	)
}

export default NavigationLink
