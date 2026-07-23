import { Link, useLocation } from "react-router";

export function NavItems() {
	const { pathname } = useLocation();
	let subpage = pathname.split("/")?.[1];

	function Linkness(type: string | null = null) {
		if (subpage === "") {
			subpage += "booking";
		}

		let classes = "text-base";

		if (type === subpage) {
			classes += " font-bold text-zinc-50";
		} else {
			classes += " font-normal text-zinc-50/50";
		}

		return classes;
	}

	return (
		<nav className="flex items-center gap-4">
			<Link to="/booking" className={Linkness("booking")}>
				Agendamentos
			</Link>
			<Link to="/doctors" className={Linkness("doctors")}>
				Médicos
			</Link>
		</nav>
	);
}
