import { Link } from "react-router";

export function NavItems() {
	return (
		<nav className="flex items-center gap-4">
			<Link to="/booking" className="font-bold text-base text-zinc-50">
				Agendamentos
			</Link>
			<Link to="/doctors" className="font-normal text-base text-zinc-50/50">
				Médicos
			</Link>
		</nav>
	);
}
