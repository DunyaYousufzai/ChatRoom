import { ChatEngine } from 'react-chat-engine';
import 'App.css';


const projectID = 'd4036c95-d861-4a17-aa6e-f83403154340';
const App = () => {
    return (
        <ChatEngin 
        height="100vh"
        projectID={projectID}
        // userName={localStorage.getItem('username')}
        // userSecret={localStorage.getItem('password')}
        userName="dunya"
        userSecret="12dunya12"
        // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;
