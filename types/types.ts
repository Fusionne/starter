import { z } from "zod";
import { nanoid } from "nanoid";

export type Todo = z.infer<typeof todoSchema>;

export const todoSchema = z.object({
	id: z.string().default(() => nanoid(10)),
	title: z.string().min(1, "Title is required"),
	content: z.string().min(1, "Content is required"),
	priority: z.enum(["HIGH", "MEDIUM", "LOW"]),
	dueDate: z.string().min(1, "Due date is required"),
	done: z.boolean().default(false),
	createdAt: z.string().default(() => new Date().toISOString()),
});
