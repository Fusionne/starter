import { cookiesClient } from "@/lib/amplify";
import {
	Card,
	CardContent,
	CardHeader,
	CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
	Calendar,
	Loader,
	CircleX,
	SignalHigh,
	SignalLow,
	SignalMedium,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { UpdateTodo } from "@/components/UpdateTodo";
import { CreateTodo } from "@/components/CreateTodo";
import { DeleteButton } from "@/components/DeleteTodo";

export default async function Home() {
	const { data: todos, errors } = await cookiesClient.models.Todo.list();
	const priority = [
		{ value: "HIGH", index: 1, icon: SignalHigh },
		{ value: "MEDIUM", index: 2, icon: SignalMedium },
		{ value: "LOW", index: 3, icon: SignalLow },
	];

	if (errors) {
		toast.error("Something went wrong", {
			description: errors[0].message,
			action: {
				label: "Contact support",
				onClick: () => "mailto:otieteayebanua@gmail.com",
			},
		});
	}

	return (
		<div className="flex flex-col h-screen">
			<h1 className="text-2xl font-bold">Everybody starts with a todo app</h1>
			<main className="flex-1 p-6">
				<div className="flex justify-between items-center mb-4">
					<Input className="" placeholder="Search..." />
					<CreateTodo />
				</div>
				<div className="grid gap-4">
					{todos.length > 0 ? (
						todos.map((todo) => (
							<Card
								key={todo.id}
								className={`border-l-4 ${todo.done ? "border-green-500" : "border-gray-500"}`}
							>
								<CardHeader>
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<Checkbox checked={todo.done || false} />
											<h3
												className={`font-medium ${todo.done ? "line-through text-gray-400" : ""}`}
											>
												{todo.title}
											</h3>
										</div>
										<div
											className={"px-2 py-1 rounded-full text-xs font-medium"}
										>
											priority:{" "}
											{priority
												.find((p) => p.value === (todo.priority || "MEDIUM"))
												?.icon({ className: "w-4 h-4" })}
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<p
										className={`text-gray-500 ${todo.done ? "line-through" : ""}`}
									>
										{todo.content}
									</p>
									<div className="flex items-center justify-between mt-2">
										<div className="text-gray-500 text-sm">
											Due: {new Date(todo.dueDate).toLocaleDateString()}
										</div>
										<div className="text-gray-500 text-sm">
											Created: {new Date(todo.createdAt).toLocaleDateString()}
										</div>
									</div>
								</CardContent>
								<CardFooter>
									<div className="flex items-center justify-end gap-2">
										<UpdateTodo
											defaultValues={{
												...todo,
												priority: todo.priority || "MEDIUM",
											}}
										/>
										<DeleteButton id={todo.id} />
									</div>
								</CardFooter>
							</Card>
						))
					) : todos.length === 0 ? (
						<div className="flex flex-col items-center justify-center h-full">
							<CircleX className="size-40 text-red-500" />
							<p className="text-gray-500">No todos yet.</p>
						</div>
					) : (
						<div className="flex flex-col items-center justify-center h-full">
							<Loader className="size-40" />
							<p className="text-gray-500">Loading...</p>
						</div>
					)}
				</div>
			</main>
			<footer className="text-primary-foreground py-4 px-6">
				<div className="flex items-center justify-between">
					<Calendar className="w-4 h-4 mr-2" />
					<span>
						{todos.filter((todo) => !todo.done).length || 0} incomplete tasks.
					</span>
				</div>
			</footer>
		</div>
	);
}
