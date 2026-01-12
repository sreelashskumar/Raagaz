export function validateLogin(email, password) {
    const trimmedEmail = email.trim()
    const trimmedPassword = password.trim()

    if (!email || !password) {
        return { isValid: false, error: "All fields are required" };
    }

    if (!isValidEmail(email)) {
        return { isValid: false, error: "Invalid email address" };
    }

    if (password.length < 6) {
        return { isValid: false, error: "Password must be at least 6 characters" };
    }

    return { isValid: true };
}

export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}