import react, { useEffect, useState } from 'react'
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import clsx from 'clsx'
import { AddBox, Done } from '@material-ui/icons'
import CardComponent from './Card'
import AddCardModalComponent from './AddCardModal'
import { Box } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { fetchTask } from '../actions/tasks'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
)

const HomeComponent = () => {
  
    const classes = useStyles()
    const theme = useTheme()
    const [open, setOpen] = useState(false)
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedValue, setSelectedValue] = useState("Teste");

    const handleClickOpen = () => {
      setOpenDialog(true);
    };
  
    const handleClose = (value: string) => {
      setOpenDialog(false);
      setSelectedValue(value);
    };

    const handleDrawerOpen = () => {
      setOpen(true)
    }

    const handleDrawerClose = () => {
      setOpen(false)
    }
    return(
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Task-list Supero
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
              <ListItem button onClick={handleClickOpen} >
                <ListItemIcon > 
                  <AddBox />
                </ListItemIcon>                
                <ListItemText primary={"Incluir tarefa"} />
              </ListItem>
              <ListItem button  >
                <ListItemIcon > 
                  <Done />
                </ListItemIcon>
                <ListItemText primary={"Tarefas concluídas"} />
              </ListItem>            
          </List>
        </Drawer>
        <AddCardModalComponent selectedValue={selectedValue} open={openDialog} onClose={handleClose} />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
        <Box my={10}>
          <CardComponent />
        </Box>
        </main>
      </div>
    )
}

export default HomeComponent