import './LoginButton.css';

interface LoginButtonProps {
    displayLoginModal: (value: boolean) => void;
}

const LoginButton = (
    {
        displayLoginModal
    }: LoginButtonProps

) => {
    return (
        <div
            className="login-button"
            onClick={() => displayLoginModal(true)}
        />
    );
};

export default LoginButton;