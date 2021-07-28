import "./styles.css";
import AddIcon from "@material-ui/icons/Add";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Download from "../download.png";
import picture from "../picture.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import React from "react";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import StorageIcon from "@material-ui/icons/Storage";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FolderIcon from "@material-ui/icons/Folder";

export default function App() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 2
      },
      paper: {
        padding: theme.spacing(5),
        textAlign: "center",
        color: theme.palette.text.secondary,
        margin: theme.spacing(1)
      }
    })
  );
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid style={{ padding: "20px" }} item xs={4}>
          <Paper className={classes.paper}>
            <FolderIcon />
            File
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <FolderIcon />
            File
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <FolderIcon />
            File
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className="App">
      <div className="App_logo ">
        <img src={Download} alt="a download" />
        <span>Drive</span>
        <div className="App_searchcontainer">
          <div className="App_searchbar">
            <SearchIcon />
            <input type="text" placeholder="search in drive" />
            <ExpandMoreIcon />
          </div>
        </div>
        <div className="App_icons">
          <span>
            <HelpOutlineIcon />
            <SettingsIcon />
          </span>
          <AppsIcon />

          <img src={picture} alt="User name" />
        </div>
      </div>

      <div className="App_sidebar">
        <div className="App_sidebarcontainer">
          <button>
            <AddIcon />
            <span>New</span>
          </button>
        </div>

        <div className={classes.root}>
          <Grid style={{ padding: "30px" }} container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <FormRow />
            </Grid>
          </Grid>

          <div className="App_sidebaritem">
            <div style={{ padding: "12px" }}>
              <ArrowRightIcon />
              <InsertDriveFileIcon />
              <span>My drive</span>
            </div>

            <div style={{ padding: "12px" }}>
              <ArrowRightIcon />
              <ImportantDevicesIcon />
              <span> Computers</span>
            </div>

            <div style={{ padding: "20px" }}>
              <PeopleAltIcon />
              <span> Share with me</span>
            </div>

            <div style={{ padding: "20px" }}>
              <QueryBuilderIcon />
              <span> Recent</span>
            </div>

            <div style={{ padding: "20px" }}>
              <StarBorderIcon />
              <span> Starred</span>
            </div>

            <div style={{ padding: "20px" }}>
              <DeleteOutlineIcon />
              <span> Trash </span>
            </div>

            <hr />

            <div style={{ padding: "20px" }}>
              <StorageIcon />
              <span> Storage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
