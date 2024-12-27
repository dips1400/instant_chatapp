import { openDB } from "idb";

const dbPromise = openDB("chat-app", 1, {
  upgrade(db) {
    db.createObjectStore("messages", { keyPath: "id" });
    db.createObjectStore("chats", { keyPath: "id" });
  },
});

export async function saveMessage(message) {
  const db = await dbPromise;
  return db.put("messages", message);
}

export async function getMessages(chatId) {
  const db = await dbPromise;
  const allMessages = await db.getAll("messages");
  return allMessages.filter((msg) => msg.chatId === chatId);
}

export async function saveChat(chat) {
  const db = await dbPromise;
  return db.put("chats", chat);
}

export async function getChats() {
  const db = await dbPromise;
  return db.getAll("chats");
}


