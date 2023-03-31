import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ResetPassword() {
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [validToken, setValidToken] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
            setToken(token);
            axios.post('http://localhost:8000/api/verifytoken/', { token: token })
                .then(response => {
                    setEmail(response.email);
                    setValidToken(true);
                    setShowForm(true);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        axios.post('http://localhost:8000/api/changepassword/', { email: email, password: password })
            .then(response => {
                console.log(response);
                // show success message
            })
            .catch(error => {
                console.log(error);
                // show error message
            });
    }

    const validateForm = () => {
        let valid = true;

        if (!password) {
            setPasswordError('Please enter a password.');
            valid = false;
        } else if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long.');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (!confirmPassword) {
            setConfirmPasswordError('Please confirm your password.');
            valid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match.');
            valid = false;
        } else {
            setConfirmPasswordError('');
        }

        return valid;
    }

    if (!validToken) {
        return (
            <div>
                Invalid token.
            </div>
        );
    }

    if (showForm) {
        return (
            <div>
                <h1>Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="password">New Password:</label>
                        <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                        {passwordError && <span className="error">{passwordError}</span>}
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                        {confirmPasswordError && <span className="error">{confirmPasswordError}</span>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

    return (
        <div>
            Verifying token...
        </div>
    );
}

export default ResetPassword;
