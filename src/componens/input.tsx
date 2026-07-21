import type { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {};

export function Input({ ...props }: InputProps) {
	return (
		<input
			{...props}
			className="h-12 bg-zinc-900 w-full placeholder:text-sm placeholder:text-zinc-50/50 focus:ring-0 outline-none"
		/>
	);
}
