import React from "react";

// MUI Components
import Button from "@schoolify/core/components/base/inputs/Button";

// Icons
import { EditIcon } from "@schoolify/core/components/icon/EditIcon";
import { DeleteIcon } from "@schoolify/core/components/icon/DeleteIcon";

export const renderEditButton = (
  _row: any,
  disabled: boolean,
  onClick: () => void
): React.ReactNode => (
  <Button
    variant="contained"
    color="warning"
    size="small"
    onClick={onClick}
    disabled={disabled}
  >
    <EditIcon fontSize="small" />
  </Button>
);

export const renderDeleteButton = (
  _row: any,
  disabled: boolean,
  onClick: () => void
): React.ReactNode => (
  <Button
    variant="contained"
    color="error"
    size="small"
    onClick={onClick}
    disabled={disabled}
  >
    <DeleteIcon fontSize="small" />
  </Button>
);

export const renderAddButton = (
  _row: any,
  disabled: boolean,
  onClick: () => void,
  title: string,
  color: string
): React.ReactNode => (
  <Button
    variant="contained"
    color={color as any}
    size="small"
    onClick={onClick}
    disabled={disabled}
  >
    {title}
  </Button>
);
