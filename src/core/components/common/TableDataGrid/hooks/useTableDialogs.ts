import { useState } from "react";
import type { SelectedRecord } from "../types/types";

interface UseTableDialogsProps {
  onDeleteRowGetTitle?: (row: any) => string;
  onDeleteRow?: (id: string, row: any) => Promise<void>;
}

export const useTableDialogs = ({
  onDeleteRowGetTitle,
  onDeleteRow,
}: UseTableDialogsProps) => {
  // Edit dialog state
  const [editRow, setEditRow] = useState<any | null>(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  // Delete dialog state
  const [selectedRecord, setSelectedRecord] = useState<SelectedRecord | null>(
    null
  );
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  // Edit handlers
  const handleEditClick = (row: any) => {
    setEditRow(row);
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  // Delete handlers
  const handleDeleteClick = (row: any) => {
    const title = onDeleteRowGetTitle?.(row) ?? "";
    setSelectedRecord({ id: row.id, title });
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const confirmDelete = () => {
    if (selectedRecord) {
      onDeleteRow?.(selectedRecord.id, selectedRecord);
      setOpenDeleteDialog(false);
    }
  };

  return {
    // Edit dialog
    editRow,
    openEditDialog,
    handleEditClick,
    handleCloseEditDialog,
    // Delete dialog
    selectedRecord,
    openDeleteDialog,
    handleDeleteClick,
    handleCloseDeleteDialog,
    confirmDelete,
  };
};
