function toggleForm(formType) {
    const loginBox = document.querySelector('.login-box');
    const signUpBox = document.querySelector('.sign-up');
    const forgotPasswordBox = document.querySelector('.forgot-password');

    loginBox.classList.add('hidden');
    signUpBox.classList.add('hidden');
    forgotPasswordBox.classList.add('hidden');

    if (formType === 'sign-up') {
        signUpBox.classList.remove('hidden');
    } else if (formType === 'forgot-password') {
        forgotPasswordBox.classList.remove('hidden');
    } else {
        loginBox.classList.remove('hidden');
    }
}