// The chat bot header component

interface ChatHeaderProps {}

const ChatHeader: React.FC<ChatHeaderProps> = ({}) => {
  return (
    <>
      <div className="flex w-full gap-3 justify-start items-center text-zinc-800">
        <div className="flex flex-col items-start text-sm">
          <p className="text-xs">Chat with us</p>
          <div className="flex gap-1.5 items-center">
            <p className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></p>
            <p className="font-medium">Souq Chatbot</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatHeader;
