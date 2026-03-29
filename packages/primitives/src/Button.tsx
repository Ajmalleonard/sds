"use client";

import {cva, cx, type VariantProps} from "class-variance-authority";
import {forwardRef} from "react";
import { Loader } from "./Loader";

export type ButtonBaseProps = VariantProps<typeof buttonStyles>;

export type ButtonProps = ButtonBaseProps &
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		href?: undefined;
		loading?: boolean;
	};

export type LinkButtonProps = ButtonBaseProps &
	React.AnchorHTMLAttributes<HTMLAnchorElement> & {
		href?: string;
		loading?: boolean;
	};



const hasHref = (
	props: ButtonProps | LinkButtonProps,
): props is LinkButtonProps => "href" in props;

export const buttonStyles = cva(
	[
		"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
		"cursor-pointer outline-none transition-all duration-100",
	],
	{
		variants: {
			size: {
				default: "px-4 py-2",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-10 rounded-md px-8",
				icon: "h-9 w-9",
			},
			variant: {
				default: "bg-accent text-white shadow hover:bg-accent/90",
				secondary: "bg-app-box text-ink-dull shadow-sm hover:bg-app-hover",
				outline: "border border-app-line bg-transparent shadow-sm hover:bg-app-hover hover:text-ink",
				ghost: "hover:bg-app-hover hover:text-ink-dull",
				destructive: "bg-status-error text-white shadow-sm hover:bg-status-error/90",
				bare: "",
			},
			rounding: {
				none: "rounded-none",
				left: "rounded-l-md rounded-r-none",
				right: "rounded-l-none rounded-r-md",
				both: "rounded-xl",
				full: "rounded-full",
			},
		},
		defaultVariants: {
			size: "default",
			variant: "default",
			rounding: "both",
		},
	},
);

export const Button = forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	ButtonProps | LinkButtonProps
>(({...props}, ref) => {
	const {className, disabled, loading, children} = props as any;
	const isDisabled = disabled || loading;
	const styles = buttonStyles(props as any);
	const finalClassName = cx(styles, className);

	const content = (
		<>
			{loading && <Loader className="size-4! animate-spin" color="currentColor" />}
			{children}
		</>
	);

	if (hasHref(props)) {
		return (
			<a
				{...(props as any)}
				ref={ref as any}
				className={cx(finalClassName, "inline-block no-underline")}
			>
				{content}
			</a>
		);
	}

	return (
		<button
			type="button"
			{...(props as ButtonProps)}
			disabled={isDisabled}
			ref={ref as any}
			className={finalClassName}
		>
			{content}
		</button>
	);
});

Button.displayName = "Button";

export {buttonStyles as buttonVariants};
