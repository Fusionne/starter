import type { Todo } from "@/types/types";
import { create } from "zustand";

interface DialogStore {
	createDialog: boolean;
	editDialog: boolean;
	editDetails: Todo | null;
	openCreateDialog: () => void;
	closeCreateDialog: () => void;
	openEditDialog: () => void;
	closeEditDialog: () => void;
	addEditDetails: (data: Todo) => void;
	removeEditDetails: () => void;
}

export const useDialogStore = create<DialogStore>((set) => ({
	createDialog: false,
	editDialog: false,
	editDetails: null,
	openCreateDialog: () => set({ createDialog: true }),
	closeCreateDialog: () => set({ createDialog: false }),
	openEditDialog: () => set({ editDialog: true }),
	closeEditDialog: () => set({ editDialog: false }),
	addEditDetails: (data) => set({ editDetails: data }),
	removeEditDetails: () => set({ editDetails: null }),
}));
