const Register = () => {
    const handleRegister = async (event) => {
      event.preventDefault();
      const username = event.target.username.value;
      const password = event.target.password.value;
  
      await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
    };
  
    return (
      <form onSubmit={handleRegister}>
        <input name="username" placeholder="Username" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    );
  };
  
  export default Register;