import { cookiesClient } from "@/lib/amplify";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import { SubmitButton } from "./submit-button";

export function DeleteButton({ id }: { id: string }) {
	const handleDelete = async () => {
		const res = await cookiesClient.models.Todo.delete({ id });
		if (res.errors) {
			toast.error(res.errors[0].message);
		}
		toast.success("Deleted successfully!");
	};

	return (
		<form action={handleDelete}>
			<SubmitButton>
				<div className="items-center justify-between">
					<Trash className="w-4 h-4 mr-2" />
					<span>Delete</span>
				</div>
			</SubmitButton>
		</form>
	);
}
