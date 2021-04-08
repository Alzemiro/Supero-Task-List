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
import React, { useEffect, useState } from "react";
import react from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncludeTask, fetchTask } from "../actions/tasks";
import { selectors } from "../selectors/tasks";
import { Task } from "../types/task";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  id?: number;
}

const AddCardModalComponent = (props: SimpleDialogProps) => {
  const edit = useSelector(selectors.getTask)
  if(props.id && props.id > 0) {
    console.log(edit.findIndex((x:Task) => x.id == props.id))
  }
  const [formData, setFormData] = useState({titulo: "", descricao: ""})
  
  const dispatch = useDispatch();
  const handleSendDate = () => {
    edit.title = formData.titulo;
    edit.content = formData.descricao;
    dispatch(fetchIncludeTask(edit))
  }
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

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
            name="titulo"
            onChange={handleChange}
            fullWidth
          />
        </DialogContentText>
      </DialogContent>
      <DialogContent >
        <DialogContentText id="alert-dialog-description">
          <TextField
            id="alert-dialog-description"
            label="Descrição"
            name="descricao"
            onChange={handleChange}
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
        </DialogContentText>
      </DialogContent>
      <DialogContent>
        <DialogActions>
            <Button color="primary" onClick={() => handleSendDate()}>Salvar</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default AddCardModalComponent;
