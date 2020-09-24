import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 10,
    margin: 10,
    textAlign: "center",
    backgroundColor: "#ffc600",
    borderRadius: 3,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* Grid Container */}
      <Grid className="app_grid" container spacing={1}>
        {/* Grid Items 1 through 12 */}
        {/* There are five grid breakpoints: xs, sm, md, lg, and xl */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography>Grid Item One</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography>Grid Item Two</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography>Grid Item Three</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography>Grid Item Four</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography>Grid Item Five</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Typography>Grid Item Six</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Typography>Grid Item Seven</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Typography>Grid Item Eight</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paper}>
            <Typography>Grid Item Nine</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paper}>
            <Typography>Grid Item Ten</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paper}>
            <Typography>Grid Item Eleven</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paper}>
            <Typography>Grid Item Tweleve</Typography>
          </Paper>
        </Grid>
        {/* End of Grid Items 1 Through 12 */}
      </Grid>
      {/* End of Grid Container */}
    </div>
  );
}

export default App;
