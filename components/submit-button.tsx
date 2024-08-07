"use client";

import { Loader } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button, type ButtonProps } from "./ui/button";

export function SubmitButton({ children }: ButtonProps) {
	const { pending } = useFormStatus();
	return (
		<Button type="submit" disabled={pending}>
			{pending ? <Loader className="animate-spin size-4" /> : children}
		</Button>
	);
}
