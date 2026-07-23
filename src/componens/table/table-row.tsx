import type { ComponentProps } from "react";

type TableRow = ComponentProps<"td">;

export function TableRow(props: TableRow) {
	return (
		<td {...props} className="border-b border-white/10 hover:bg-white/5" />
	);
}
