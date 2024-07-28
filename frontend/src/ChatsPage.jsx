import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
      <div className="background">
        <PrettyChatWindow
          projectId='0b8f53bd-6119-4a71-8de3-f17209091cf6'
          username={props.user.username}
          secret={props.user.secret}
        />
      </div>
    );
  };
  
  export default ChatsPage;