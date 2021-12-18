import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  button: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.9rem",
    fontWeight: 400,
    width: "8rem",
    padding: "0.45rem rem",
    border: "1px solid #e1e3e6",
    borderRadius: "0.313rem",
    background: "#0f53f5",
    cursor: "pointer",
    color: "#fefefe",
    transition: "ease-out 0.1s",
    "&:hover": {
      filter: "contrast(130%)",
      transition: "ease-in 0.1s",
    },
  },
});
