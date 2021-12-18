import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    height: "auto",
    padding: "3rem",
    flexDirection: "column",
    alignItems: "center",
    background: "#f5f5f5",
    minHeight: "100vh",
  },
  searchContainer: {
    display: "flex",
    gap: "0.8rem",
    paddingBottom: "1rem",
  },
  title: {
    fontSize: "2rem",
  },
});
