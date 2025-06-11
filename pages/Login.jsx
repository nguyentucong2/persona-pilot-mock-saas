export default function Login() {
    return (
        <main className="login">
            <h1>WIP, please come back later</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                
                <button type="submit">Log In</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign up here</a>.</p>
        </main>
    );
}