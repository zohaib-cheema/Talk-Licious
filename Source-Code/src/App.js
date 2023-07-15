import { initializeApp } from "firebase/app";
import { AuthenticatedApp } from './components/AuthenticatedApp';
import { UnauthenticatedApp } from './components/UnauthenticatedApp';
import { useAuth } from './hooks/useAuth';
import './App.css';


const firebaseConfig = {
  apiKey: "AIzaSyC7cDUZDTAPwGN5QoM1EGi3FWy7vw27nio",
  authDomain: "chat-room-40053.firebaseapp.com",
  projectId: "chat-room-40053",
  storageBucket: "chat-room-40053.appspot.com",
  messagingSenderId: "192884012840",
  appId: "1:192884012840:web:059f025c0dff3bde63021d"
};

function App() {
  const { user } = useAuth();

  return (
      <div className="container">
          <h1>💬 Talk-Licious: Chat Rooms</h1>
          <h4>Made With ❤️ By <a href="https://moeezkhan.com/">Moeez Khan</a></h4>
          {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </div>
  );
}

const app = initializeApp(firebaseConfig);

export default App