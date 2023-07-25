import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async  (e) => {
        e.preventDefault();
        
        const authObject = {'Project-ID': "a4c4b7bb-9e60-481e-a3c7-30ca20e118da", 'User-Name': username, 'User-Secret': password }

        try {
            
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();

        } catch (error) {
         setError('Incorrect credentials, Please try logging in again.');
         setusername('');
         setPassword('');   
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit} >
                    <input type="text" value={username} onChange={(e) => setusername(e.target.value)}  className="input" placeholder="username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )

}

export default LoginForm;