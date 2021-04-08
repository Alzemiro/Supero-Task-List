import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import { DoneOutlined, EditOutlined } from "@material-ui/icons";
import { CardActionArea, CardActions, makeStyles } from "@material-ui/core";
import ModalEdit from "./ModalEdit";

const useStyles = makeStyles((theme) => ({
  checkButton: {
    background: (done) => {
      if (done) {
        return "#B2FFB2";
      }
    },
  },
}));

export default function TaskCard({
  task,
  handleDelete,
  handleDone,
}) {
  const classes = useStyles(task.finished);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <div>
      <Card elevation={1} className={classes.checkButton}>
        <CardHeader title={task.title} />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {task.content}
          </Typography>
        </CardContent>
        <CardActionArea>
          <CardActions>
            <IconButton onClick={() => handleDelete(task.id)}>
              <DeleteOutlined />
            </IconButton>
            <IconButton onClick={handleClickOpen}>
              <EditOutlined />
            </IconButton>
            <IconButton onClick={() => handleDone(task.id)}>
              <DoneOutlined />
            </IconButton>
          </CardActions>
        </CardActionArea>
      </Card>
      <ModalEdit open={openDialog} task={task} onClose={handleClose} />
    </div>
  );
}
