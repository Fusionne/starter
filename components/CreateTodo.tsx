"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createTodo } from "@/actions/todo";
import { type Todo, todoSchema } from "@/types/types";
import { toast } from "sonner";
import { CalendarDays, Plus } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { SubmitButton } from "./submit-button";

export function CreateTodo() {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const form = useForm<Todo>({
		resolver: zodResolver(todoSchema),
		defaultValues: {
			id: "",
			title: "",
			content: "",
			priority: "LOW",
			dueDate: "",
		},
	});

	function onSubmit(values: Todo) {
		async () => {
			const res = await createTodo(values);
			if (res.success) {
				toast.success("Todo created successfully");
				setOpen(false);
				router.refresh();
			} else {
				toast.error(res.error);
				setOpen(false);
			}
		};
	}

	return (
		<Dialog open={open}>
			<DialogTrigger asChild>
				<Button variant={"outline"} size={"sm"}>
					<Plus className="w-4 h-4 mr-2" />
					Add todo
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Create a Todo</DialogTitle>
					<DialogDescription>
						Plan your activities, what it is about and all the perks
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input placeholder="Title" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="content"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Content</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Write a bit more about this activity"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="priority"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Priority</FormLabel>
									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											defaultValue={field.value}
											className="flex flex-col space-y-1"
										>
											<FormItem className="flex items-center space-x-3 space-y-0">
												<FormControl>
													<RadioGroupItem value="HIGH" />
												</FormControl>
												<FormLabel className="font-normal">
													High priority.
												</FormLabel>
											</FormItem>
											<FormItem className="flex items-center space-x-3 space-y-0">
												<FormControl>
													<RadioGroupItem value="MEDIUM" />
												</FormControl>
												<FormLabel className="font-normal">
													Medium priority.
												</FormLabel>
											</FormItem>
											<FormItem className="flex items-center space-x-3 space-y-0">
												<FormControl>
													<RadioGroupItem value="LOW" />
												</FormControl>
												<FormLabel className="font-normal">
													Low priority.
												</FormLabel>
											</FormItem>
										</RadioGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="dueDate"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Due Date</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"w-[240px] pl-3 text-left font-normal",
														!field.value && "text-muted-foreground",
													)}
												>
													{field.value ? (
														format(new Date(field.value), "PPP")
													) : (
														<span>Pick a date</span>
													)}
													<CalendarDays className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												selected={
													field.value ? new Date(field.value) : undefined
												}
												onSelect={field.onChange}
												disabled={(date) => date < new Date()}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>
						<SubmitButton>
							<Plus className="w-4 h-4 mr-2" />
							Create
						</SubmitButton>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
