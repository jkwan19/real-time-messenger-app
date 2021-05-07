const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    ],
    lastMessage: {
      type: String,
    },
    lastUnread: {
      type: Date
    }
});

module.exports = Conversation = mongoose.model("conversations", ConversationSchema);