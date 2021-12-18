import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  listContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  book: {
    fontFamily: "Roboto, sans-serif",
    background: "#b2d4fb",
    display: "flex",
    flexDirection: "column",
    padding: "1.2rem 1.5rem",
    margin: "0.7rem",
    width: "35rem",
    borderRadius: "0.5rem",
    boxShadow:
      "0px 10px 10px -5px rgba(45, 55, 72, 0.04), 0px 20px 25px -5px rgba(45, 55, 72, 0.1)",
  },
  bookAtributes: {
    display: "grid",
    padding: "0.4rem",
    gridTemplateColumns: "1fr 1.8fr 13fr",
  },
  content: {
    wordBreak: "break-all",
  },
});
