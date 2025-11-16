import { useCallback, useState } from 'react';

export type Message = { id: string; text: string; outgoing?: boolean };

export default function useChat(initial: Message[] = []) {
  const [messages, setMessages] = useState<Message[]>(initial);

  const send = useCallback((text: string) => {
    const msg: Message = { id: String(Date.now()), text, outgoing: true };
    setMessages((m) => [...m, msg]);

    setTimeout(() => {
      setMessages((m) => [...m, 
        { id: String(Date.now() + 1), 
          text: `Echo: ${text}`, 
          outgoing: false 
        }]);
    }, 700);
  }, []);

  return { messages, send, setMessages };
}