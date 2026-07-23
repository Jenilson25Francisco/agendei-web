import { ChevronDownIcon } from "lucide-react";
import { NavItems } from "./nav-items";

export function Header() {
	return (
		<header className="absolute top-0 z-10 bg-blue-800 w-full h-16 flex items-center justify-center sticky">
			<div className="flex items-center justify-between px-5 w-full">
				<div className="flex items-center gap-[74px]">
					<img
						src="/logo2.png"
						alt="logo do cabeçalho"
						width={116}
						height={30.59}
					/>

					<NavItems />
				</div>
				<div className="flex items-center gap-1">
					<span className="text-sm ">Clinica saúde em dia</span>
					<ChevronDownIcon className="size-4" />
				</div>
			</div>
		</header>
	);
}
