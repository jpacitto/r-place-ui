import './LoginModal.css';

interface LoginModalProps {
    displayLoginModal: (value: boolean) => void;
}

const LoginModal = (
    {
        displayLoginModal
    }: LoginModalProps
) => {
    return (
        <div className="login-modal-background flex-center">
            <div className="login-modal" onClick={() => displayLoginModal(false)}>
                <p>memes</p>
            </div>
        </div>
    );
};

export default LoginModal;