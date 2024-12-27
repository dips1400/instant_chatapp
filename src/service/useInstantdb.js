import { id, i, init } from "@instantdb/react"; 

const APP_ID = "298d390e-fc7f-4a69-893e-040874916b4f";

const schema = i.schema({
  entities: {
    users: i.entity({
      id: i.string(),
      name: i.string(),
      email: i.string(),
      password: i.string(),
    }),
    chatmessage: i.entity({
      id: i.string(),
      chatId: i.string(),
      sender: i.string(),
      recipient: i.string(),
      text: i.string(),
      timestamp: i.date(),
      readStatus: i.boolean().optional(),
    }),
    chats: i.entity({
      id: i.string(),
      participants: i.json(),
      lastMessageId: i.string().optional(),
    }),
  },
});

const db = init({
  appId: APP_ID,
  schema: schema,
});

export default function useInstantdb() {
  const { data, isLoading, error } = db.useQuery({
    chatmessage: {},
    users: {},
    chats: {},
  });


  const sendMessage = async (chatId, sender, recipient, text) => {
    const messageId = id(); 
    const timestamp = new Date();
  
    // Debug log the values being passed
    console.log("sendMessage called with:", { chatId, sender, recipient, text });
  
    // Validate data before sending it
    if (!chatId || !sender || !recipient || !text) {
      console.error("Missing required fields to send message:", { chatId, sender, recipient, text });
      throw new Error("Missing required fields to send message.");
    }
  
    try {
      await db.transact(
        db.tx.chatmessage[messageId].update({
          id: messageId,
          chatId,
          sender,
          recipient,
          text,
          timestamp,
          readStatus: false, 
        }),
        db.tx.chats[chatId].update({
          lastMessageId: messageId,
        })
      );
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;  
    }
  };
  
  const getMessagesForChat = (chatId) => {
    return data?.chatmessage?.filter((message) => message.chatId === chatId) || [];
  };
  

    // Add user function
    const addUser = async (user) => {
      const userId = id(); // Generate a unique ID for the user
      try {
        await db.transact(
          db.tx.users[userId].update({
            id: userId,
            name: user.name,
            email: user.email,
            password: user.password,
          })
        );
      } catch (error) {
        console.error("Error adding user:", error);
        throw error;
      }
    };

  return {
    data,
    isLoading,
    error,
    sendMessage,
    addUser,
    getMessagesForChat,  
  };
}


