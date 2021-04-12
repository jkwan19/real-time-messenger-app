import {
  Typography
} from "@material-ui/core";

import TypingIcon from "./TypingIcon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  friend: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      margin: 'auto'
    }
  },
  user:{
    paddingLeft: theme.spacing(2),
    overflow: 'wrap',
    [theme.breakpoints.down("sm")]: {
      margin: 'auto',
      maxWidth: '2vh'
    }
  }
}));

export default function Content({ color, message, type, isReceived, isTyping }) {
  const classes = useStyles();

  if (isTyping) {
    return (
      <TypingIcon />
    )
  }

  return (
    <Typography
      color={color}
      variant="body2"
      className={classes[type]}
      >
        {message}
      </Typography>
  )
}