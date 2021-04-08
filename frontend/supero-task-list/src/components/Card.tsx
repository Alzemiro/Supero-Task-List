import react, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectors } from "../selectors/tasks";
import { Task } from "../types/task";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import { fetchDeleteTask, fetchTask } from "../actions/tasks";
import AddCardModalComponent from "./AddCardModal";

const CardComponent = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Teste");
  const theme = useTheme();
  const task: Task[] = useSelector(selectors.getTask);

  const dispatch = useDispatch();
  const handleDelete = (value: number | undefined) => {
    dispatch(fetchDeleteTask(value));
  };
  const handleUpdate = (value: number | undefined) => {
    dispatch(fetchDeleteTask(value));
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = (value: string) => {
    setOpenDialog(false);
    setSelectedValue(value);
  };

  return (
    <Grid container justify="space-between" direction="row" spacing={2}>
      {task.map((t) => {
        return (
          <Grid item key={t.id} xs={12} md={6} lg={3}>
            <Card elevation={1}>
              <CardHeader
                action={
                  <>  
                    <IconButton onClick={() => handleDelete(t.id)}>
                        <DeleteOutlined />
                    </IconButton>
                    <IconButton onClick={handleClickOpen}>
                        <EditOutlined />
                    </IconButton>
                    <AddCardModalComponent selectedValue={selectedValue} open={openDialog} onClose={handleClose} id={t.id}/>
                  </>
                }
                title={t.title}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {t.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardComponent;
