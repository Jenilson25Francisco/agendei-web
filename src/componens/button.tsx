import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
	title: string;
};

export function Button({ title, ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className="bg-blue-700 w-full h-12 flex items-center justify-center font-semibold text-md rounded-lg"
		>
			{title}
		</button>
	);
}
