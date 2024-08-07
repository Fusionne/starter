"use server";

import { type Todo, todoSchema } from "@/types/types";
import { cookiesClient, auth } from "@/lib/amplify";

export async function createTodo(values: Todo) {
	try {
		const user = await auth();
		if (!user) return { error: "Unauthorized" };
		const { success, error, data } = todoSchema.safeParse(values);
		if (success) {
			const res = await cookiesClient.models.Todo.create({
				title: data.title,
				content: data.content,
				priority: data.priority,
				dueDate: data.dueDate,
				createdAt: data.createdAt,
				done: data.done,
				owner: user.userId,
			});
			if (res) return { success: true };
			return { error: "Something went wrong" };
		}
		return { error: error?.message };
	} catch (error) {
		console.error(error);
		return { error: "Something went wrong" };
	}
}

export async function updateTodo(values: Partial<Todo> & { id: string }) {
	try {
		const user = await auth();
		if (!user) return { error: "Unauthorized" };
		const { success, error, data } = todoSchema.safeParse(values);
		if (success) {
			const updateTodo = Object.entries(values).reduce(
				(acc, [key, value]) => {
					if (value !== undefined) {
						// biome-ignore lint/performance/noAccumulatingSpread: don't touch
						return { ...acc, [key]: value };
					}
					return acc;
				},
				{} as Partial<Todo> & { id: string },
			);
			if (Object.keys(updateTodo).length > 0) {
				const res = await cookiesClient.models.Todo.update(updateTodo);
				if (res) return { success: true };
			}
			return { error: "Something went wrong" };
		}
		return { error: error?.message };
	} catch (error) {
		console.error(error);
		return { error: "Something went wrong" };
	}
}
