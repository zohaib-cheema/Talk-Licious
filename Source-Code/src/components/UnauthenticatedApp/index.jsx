import { useAuth } from '../../hooks/useAuth';
import './styles.css';

function UnauthenticatedApp() {
    const { login } = useAuth();

    return (
        <>
            <h2>Log-In To Join A Chat Room!</h2>
            <div>
                <button onClick={login} className="login">
                    Log-In With Google
                </button>
            </div>
        </>
    );
}

export { UnauthenticatedApp };