import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  useTheme,
} from "@material-ui/core";
import React from "react";
import react from "react";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const AddCardModalComponent = (props: SimpleDialogProps) => {
  const theme = useTheme();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      fullWidth
      maxWidth="md"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Adicionar Card</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <TextField
            autoFocus
            required
            id="standard-required"
            label="Tarefa"
            fullWidth
          />
        </DialogContentText>
      </DialogContent>
      <DialogContent >
        <DialogContentText id="alert-dialog-description">
          <TextField
            id="alert-dialog-description"
            label="Descrição"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
        </DialogContentText>
      </DialogContent>
      <DialogContent>
        <DialogActions>
            <Button color="primary">Salvar</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default AddCardModalComponent;
