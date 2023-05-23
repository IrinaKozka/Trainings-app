<script>
    import { navigate } from "svelte-routing";
  
    let email = '';
    let password = '';
    let isLoggedIn = false;
    
    function handleLogin(event) {
      event.preventDefault();
      const isAuthenticated = authenticate(email, password);
      if (isAuthenticated) {
        isLoggedIn = true;
        navigate('/home');
      } else {
        alert('Invalid credentials');
      }
    }
  </script>
  
  
  <div class="container">
      <div class="box">
  <div class="form">
  
  <form on:submit|preventDefault={handleLogin}>
      <div>
            <label for="email">Email:</label>
      </div>
      <div>      
    <input type="email" id="email" bind:value={email} required>
      </div>
  
  <div>
        <label for="password">Password:</label>
  </div> 
   <div>   
    <input type="password" id="password" bind:value={password} required>
  </div>
  
  <div>
       <button type="submit">Log in</button>
       </div>
       <div>
    <label class="register" for="register">If you don't have account <a href="/register">Register</a></label>
  </div>
  </form>
  </div>
      </div>
  </div>


<style>
 .container {
    position: absolute;
    width: 90%;
    height: 80%;
    left: 5%;
    top: 10%;
    display: flex;
    background-color: rgba(197, 195, 195, 0.33);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    }

    .box{
    position: absolute;
    height: 90%;
    width: 90%;
    left: 5%;
    top: 5%;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.96);
    }

    .form {
      position: absolute;
      height: 90%;
      width: 100%;
      display: grid;
      place-items: center;
      font-size: 0.8rem;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 400;
    }
     
    input, button {
       display: flex;
       align-items: center;
       justify-content: center;
       width: 100%;
       height: 40%;
       border-radius: 10px;
       border-width: 0.0rem;
       box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    button{
        display: grid;
        place-items: center;
        margin-top: 1rem;
        width: 103%;
        height: 1.3rem;
        background-color:  hsl(334, 94%, 46%);
        color: white;
        font-weight: normal;
    }

    a {
        color:  hsl(334, 94%, 46%);
      }

    .register{
        font-size: 0.7rem;
    }

    input:hover,
    input:focus {
        border-color: hsl(334, 94%, 46%);
    }
</style>