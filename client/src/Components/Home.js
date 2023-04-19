import React from "react";
import { Link } from "react-router-dom";

// Assets
import BlockchainCredentialsImage from "../Images/blockchain_credentials.png";
import IIITL_Logo from "../Images/Logo.png";
import BlockchainImage from "../Images/abc.png";

// External Components
import {
  Paper,
  Grid,
  Box,
  Button,
  useMediaQuery,
  Typography,
} from "@material-ui/core"; 
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 64px)",
    background: "rgb(96, 150, 180)",
    background:
      "linear-gradient(124deg, rgba(96, 150, 180, 1) 0%, rgba(147, 191, 207, 1) 36%, rgba(189, 205, 214, 1) 100%)",

    overflow: "hidden",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  leftPanel: {
    paddingLeft: "10vw",
    paddingRight: "10vw",
    color: "white",
  },
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={6}>
          <Box
            style={{ height: "100%" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            className={classes.leftPanel}
          >
            <Box style={{ height: "5%", paddingBottom: "75px" }} display="flex" alignItems=" center">
              <img src={IIITL_Logo} style={{ width: "35%" }} />
            </Box>
            {/* <Box
              style={{
                fontSize: "32px",
                fontWeight: "100",
              }}
            >
              Blockchain Verified Certificates
            </Box> */}
            <Box m={0.5} />
            <Box style={{ fontSize: "60px", fontWeight: "900" }}>IIITL Certificates</Box>
            <Box m={1.5} />
            <Typography variant="body2">
              A Decentralized Certificate Issuance System to
              create certificates that are Immutable, Cryptographically Secured,
              and have Zero Downtime.{" "}
            </Typography>
            <Box m={1.5} />
            <Typography variant="h6">What are you looking for</Typography>
            <Box m={1.5} />
            <Box display="flex">
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ marginRight: "30px", fontWeight: "600" }}
                component={Link}
                to="/institute"
              >
                Issue Certificates
              </Button>
              <Button
                variant="contained"
                color="default"
                size="large"
                style={{ backgroundColor: "white", fontWeight: "600" }}
                component={Link}
                to="/view"
              >
                View Certificates
              </Button>
            </Box>
          </Box>
        </Grid>
        {md && (
          <Grid item xs={12} md={6}>
            {/* <Box style={{ height: "100%" }} display="flex" alignItems=" center">
              <img src={BlockchainCredentialsImage} style={{ height: "85%" }} />
            </Box> */}
            <Box style={{ height: "100%" }} display="flex" alignItems=" center">
              <img src={BlockchainImage} style={{ width: "85%" }} />
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
}
export default Home;
// hello this is faltu comment