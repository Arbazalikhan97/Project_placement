import { Server, Socket } from 'socket.io';
import Message from '../models/Message'; // Add proper import

export const configureSocket = (httpServer: any) => {
  const io = new Server(httpServer, {
    cors: { origin: process.env.CLIENT_URL }
  });

  io.on('connection', (socket: Socket) => {
    socket.on('message', async (message: any) => {
      const savedMessage = await Message.create(message);
      io.to(message.receiverId).emit('newMessage', savedMessage);
    });
  });
};