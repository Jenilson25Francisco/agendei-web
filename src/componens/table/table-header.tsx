import type { ComponentProps } from "react";

type Props = ComponentProps<"th">;

export function TableHeader({ ...props }: Props) {
	return <th className="font-bold px-4 py-3 text-base text-left" {...props} />;
}
