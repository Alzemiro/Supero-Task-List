import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,

  } from "@material-ui/core";
import axios from "axios";

import React, { useState } from "react";
import { useHistory } from "react-router";
  
  const ModalEdit = ({open, task, onClose}) => {
    const [title, setTitle] = useState(task.title)
    const [details, setDetails] = useState(task.content)
    const history = useHistory()

    const handleUpdate = async (id, title, details) => {
        const data = task
        data.title = title
        data.content = details
        axios.put(`http://localhost:9090/card/${id}`, data).then(() => history.push("/"));
      };
    const closeOnSave = () => {
        handleUpdate(task.id, title, details)
        onClose()
    }

    return (
      <Dialog
        onClose={onClose}
        open={open}
        fullWidth
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Editar Tarefa</DialogTitle>
        <DialogContent>
          <DialogContentText >
            <TextField
              color="secondary"
              autoFocus
              required
              variant="outlined"
              label="Tarefa"
              name="titulo"
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              value={title}
            />
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <DialogContentText >
            <TextField
              color="secondary"
              label="Descrição"
              name="descricao"
              onChange={(e) => setDetails(e.target.value)}
              multiline
              rows={4}
              variant="outlined"
              value={details}
              fullWidth
            />
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <DialogActions>
            <Button onClick={() => closeOnSave()}>
              Salvar
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default ModalEdit;
  