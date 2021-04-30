import {
  useState,
  useEffect
} from "react";

import {
  List,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import User from "../profile/User";

const useStyles = makeStyles(theme => ({
  list: {
    marginRight: theme.spacing(2),
    height: '100%',
    width: '100%',
    overflowY: 'scroll',
    position: 'relative',
    [theme.breakpoints.down("sm")]: {
      marginRight: 0
    }
  }
}));

export default function ChatList ({ friendsData, handleChat }) {

  const classes = useStyles();

  const [friendsList, setFriendsList] = useState([])


  useEffect(() => {

    setFriendsList(friendsData.map((friend) => {

      const {
        _id,
        username,
        membersObj,
        lastMessage
      } = friend;

      return (
        <User
          key={_id}
          _id={_id || membersObj[0]._id}
          name={username}
          message={lastMessage || ''}
          numUnread={0}
          isOnline={true}
          isRead={false}
          isTyping={false}
          handleChat={handleChat}
        />
      )
    }));


  }, [friendsData, handleChat])

  return (
    <List
      className={classes.list}
      >
      {friendsList}
    </List>
  )
}