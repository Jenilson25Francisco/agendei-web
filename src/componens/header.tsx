import { NavItems } from "./nav-items";

export function Header() {
	return (
		<header className="absolute top-0 z-10 bg-blue-800 w-full h-16 flex items-center justify-between sticky">
			<div className="flex items-center gap-[74px] px-5 w-full">
				<img
					src="/logo2.png"
					alt="logo do cabeçalho"
					width={116}
					height={30.59}
				/>

				<NavItems />
			</div>
			<div></div>
		</header>
	);
}
