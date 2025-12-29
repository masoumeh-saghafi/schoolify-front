// React Type
import React from "react";
import type { TransitionProps } from "@mui/material/transitions";

// MUI Components
import Dialog from "@schoolify/core/components/base/inputs/Dialog";
import DialogTitle from "@schoolify/core/components/base/inputs/DialogTitle";
import DialogContent from "@schoolify/core/components/base/inputs/DialogContent";
import DialogActions from "@schoolify/core/components/base/inputs/DialogActions";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import Button from "@schoolify/core/components/base/inputs/Button";
import Slide from "@schoolify/core/components/base/inputs/Slide";

// Custom Hooks
import { theme } from "@schoolify/core/style/themes/muiTheme";

// Custom Types
import type { SelectedRecord } from "@schoolify/core/components/common/TableDataGrid/types/types";

// Transition component for dialog
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  selectedRecord: SelectedRecord | null;
  onConfirm: () => void;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  open,
  onClose,
  selectedRecord,
  onConfirm,
}) => {
  return (
    <Dialog open={open} onClose={onClose} slots={{ transition: Transition }}>
      <DialogTitle fontSize="1.1rem">حذف رکورد</DialogTitle>
      <DialogContent>
        <Typography sx={{ color: theme.palette.text.black }}>
          {selectedRecord ? (
            <>
              آیا از حذف رکورد <b>{selectedRecord.title}</b> مطمئن هستید؟{" "}
            </>
          ) : (
            "در حال بارگذاری اطلاعات..."
          )}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          انصراف
        </Button>
        {selectedRecord && (
          <Button onClick={onConfirm} color="error">
            تأیید
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
