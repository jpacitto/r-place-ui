import { useState } from 'react';

import LoginButton from './LoginButton';
import LoginModal from './LoginModal';

import './Account.css';


const Account = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] =useState(false);

    const displayLoginModal = (value: boolean) => {
        setShowLoginModal(value);
    };

    return (
        <>
            {!isLoggedIn && <LoginButton displayLoginModal={displayLoginModal} />}
            {showLoginModal && <LoginModal displayLoginModal={displayLoginModal} />}
        </>
    );
};

export default Account;