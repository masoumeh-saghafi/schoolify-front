import React from "react";

// MUI Components
import Dialog from "@schoolify/core/components/base/inputs/Dialog";
import DialogTitle from "@schoolify/core/components/base/inputs/DialogTitle";
import DialogContent from "@schoolify/core/components/base/inputs/DialogContent";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import Button from "@schoolify/core/components/base/inputs/Button";

interface EditDialogProps {
  open: boolean;
  onClose: () => void;
  editRow: any;
  onUpdateForm?: React.ComponentType<{
    recordId: string;
    defaultValues: any;
    onSubmit?: (id: string, data: any, row?: any) => void;
  }>;
  onUpdateRow?: (id: string, updatedFields: any, row: any) => Promise<void>;
}

const EditDialog: React.FC<EditDialogProps> = ({
  open,
  onClose,
  editRow,
  onUpdateForm,
  onUpdateRow,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ flexGrow: 1, fontSize: "1.1rem" }}>
          ویرایش جزئیات
        </Typography>
        <Button
          variant="text"
          color="error"
          onClick={onClose}
          sx={{ minWidth: 0, paddingX: "15px", paddingY: "5px" }}
        >
          ✕
        </Button>
      </DialogTitle>

      <DialogContent>
        {editRow &&
          onUpdateForm &&
          (() => {
            const FormComponent = onUpdateForm;
            return (
              <FormComponent
                recordId={editRow.id}
                defaultValues={editRow.data}
                onSubmit={onUpdateRow}
              />
            );
          })()}
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
