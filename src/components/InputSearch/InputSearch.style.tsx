import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  input: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.9rem",
    fontWeight: 400,
    width: "14rem",
    padding: "0.45rem 0.8rem",
    outline: "none",
    border: "1px solid #e1e3e6",
    borderRadius: "0.313rem",
    transition: "ease-out 0.1s",
    "&::placeholder": {
      color: "#9f9f9f",
      textAlign: "center",
    },
    "&:focus": {
      border: "1px solid #0f53f5",
      transition: "ease-in 0.1s",
    },
  },
});
