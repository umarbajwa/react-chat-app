import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';


const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />;

  return(
    <ChatEngine 
      height="100vh"
      projectID="a4c4b7bb-9e60-481e-a3c7-30ca20e118da"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      username={localStorage.getItem('username')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App;