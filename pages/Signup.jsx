export default function Signup() {
    return (
        <main className="signup">
            <h1>WIP, please come back</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="/login">Log in here</a>.</p>
        </main>
    );
}