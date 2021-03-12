import "./App.css";
import { useState, useEffect } from "react";

//!Images!\\
import Linked from "./Img/linkedIn.png";

import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import useStyles from "./CustomStyles";
function App() {
  const classes = useStyles();
  const [bg, setBg] = useState("purple");

  const randomColor = () => {
    const random = "#" + Math.floor(Math.random() * 16777142).toString(16);
    setBg(random);
  };

  useEffect(() => {
    randomColor();
  }, []);
  return (
    <>
      <Container style={{ background: bg }} maxWidth="xlg">
        <Container spacing="center" align="center">
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
          >
            <Grid item lg={3}>
              <Paper className={classes.colored} elevation={0}>
                <h1>{bg}</h1>
              </Paper>
              <p>Give A ⭐ And Get A Chance To Win My ❤️</p>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default App;
