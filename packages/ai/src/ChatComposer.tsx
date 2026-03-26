import {clsx} from "clsx";
import {forwardRef, useMemo, useState} from "react";
import {Microphone, Image as ImageIcon} from "@phosphor-icons/react";
import {
	OptionList,
	OptionListItem,
	Popover,
	PopoverContent,
	PopoverTrigger,
	SelectTriggerButton,
} from "@spaceui/primitives";
import type {ModelOption} from "./types";

interface ChatComposerProps {
	value: string;
	onChange: (value: string) => void;
	onSend: () => void;
	footerStart?: React.ReactNode;
	onVoiceClick?: () => void;
	onImageClick?: () => void;
	disabled?: boolean;
	placeholder?: string;
	models?: ModelOption[];
	selectedModel?: string;
	onModelChange?: (model: string) => void;
	className?: string;
}

const ChatComposer = forwardRef<HTMLDivElement, ChatComposerProps>(
	(
		{
			value,
			onChange,
			onSend,
			footerStart,
			onVoiceClick,
			onImageClick,
			disabled = false,
			placeholder = "Ask the agent to review a project, plan work, or start a task...",
			models,
			selectedModel,
			onModelChange,
			className,
		},
		ref,
	) => {
		const [isFocused, setIsFocused] = useState(false);
		const [modelOpen, setModelOpen] = useState(false);

		const isExpanded = isFocused || value.trim().length > 0;
		const canSend = !disabled && value.trim().length > 0;

		const selectedModelOption = useMemo(
			() => models?.find((model) => model.id === selectedModel),
			[models, selectedModel],
		);

		const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
			if (event.key === "Enter" && !event.shiftKey) {
				event.preventDefault();
				if (canSend) {
					onSend();
				}
			}
		};

		return (
			<div
				ref={ref}
				className={clsx(
					"rounded-[28px] border border-app-line bg-app-box/70 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl",
					className,
				)}
			>
				<div
					className={clsx(
						"overflow-hidden rounded-[20px] border border-app-line bg-app p-4 transition-all duration-200",
						isExpanded ? "min-h-[228px]" : "min-h-[186px]",
					)}
				>
					<textarea
						value={value}
						onChange={(event) => onChange(event.target.value)}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						onKeyDown={handleKeyDown}
						placeholder={placeholder}
						disabled={disabled}
						rows={4}
						className="h-[120px] w-full resize-none border-0 bg-transparent text-[15px] leading-7 text-ink outline-none ring-0 placeholder:text-ink-faint focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-60"
					/>

					<div className="mt-5 flex items-end justify-between gap-3">
						<div className="min-w-0 flex-1">{footerStart ?? null}</div>

						<div className="flex items-center gap-2">
							{models && models.length > 0 && onModelChange ? (
								<Popover open={modelOpen} onOpenChange={setModelOpen}>
									<PopoverTrigger asChild>
										<SelectTriggerButton
											disabled={disabled}
											placeholder="Select model"
										>
											{selectedModelOption?.name}
										</SelectTriggerButton>
									</PopoverTrigger>
									<PopoverContent
										align="end"
										sideOffset={8}
										className="min-w-[240px] p-2"
									>
										<OptionList>
											{models.map((model) => (
												<OptionListItem
													key={model.id}
													onClick={() => {
														onModelChange(model.id);
														setModelOpen(false);
													}}
													selected={model.id === selectedModel}
												>
													{model.name}
												</OptionListItem>
											))}
										</OptionList>
									</PopoverContent>
								</Popover>
							) : null}

							{onImageClick ? (
								<button
									type="button"
									onClick={onImageClick}
									disabled={disabled}
									className="flex size-9 shrink-0 items-center justify-center rounded-full border border-app-line bg-app-box text-ink-dull transition-colors hover:bg-app-hover hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
								>
									<ImageIcon className="size-4" weight="regular" />
								</button>
							) : null}

							{onVoiceClick ? (
								<button
									type="button"
									onClick={onVoiceClick}
									disabled={disabled}
									className="flex size-9 shrink-0 items-center justify-center rounded-full border border-app-line bg-app-box text-ink-dull transition-colors hover:bg-app-hover hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
								>
									<Microphone className="size-4" weight="fill" />
								</button>
							) : null}

							<div
								className={clsx(
									"overflow-hidden transition-all duration-200",
									canSend ? "w-[76px] opacity-100" : "w-0 opacity-0",
								)}
							>
								<button
									type="button"
									onClick={onSend}
									disabled={!canSend}
									className="flex h-11 w-[76px] items-center justify-center rounded-full border border-app-line bg-accent px-4 text-xs font-medium text-white transition-colors hover:bg-accent-faint disabled:cursor-not-allowed disabled:opacity-60"
								>
									<span className="whitespace-nowrap">Send</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
);

ChatComposer.displayName = "ChatComposer";

export {ChatComposer};
