<script>
  
  export let user = {
  email: '',
  password: '',
  password2: '',
  first_name: '',
  second_name: '',
  role: ''
};

    async function handleRegistration() {
    try {
      await createUser(email, password);
      console.log('User has been register');
    } catch (error) {
      console.log('There was an error while registering', error);
    }
  }

  function handleRoleChange(event) {
    role = event.target.value;
  }

</script>

<div class="container">
    <div class="box">
<div class="form">

<form on:submit={handleRegistration}>
        <div>
          <label for="name">First name:</label>
    </div>
    <div>      
  <input type="text" bind:value={user.first_name} required>
    </div>
        <div>
          <label for="seconName">Second name:</label>
    </div>
    <div>      
  <input type="text" bind:value={user.second_name} required>
    </div>
    <div>
          <label for="email">Email:</label>
    </div>
    <div>      
  <input type="email" bind:value={user.email} required>
    </div>

<div>
      <label for="password">Password:</label>
</div> 
 <div>   
  <input type="password" bind:value={user.password} required>
</div>
<div>
      <label for="password2">Repeat password:</label>
</div> 
 <div>   
  <input type="password" bind:value={user.password2} required>
</div>

<div class="checkbox-container">
  <input class="role" type="radio" id="trainer" name="role" value="trainer" on:change={handleRoleChange} required>
  <label for="trainer">Trainer</label>
</div>
<div class="checkbox-label">
  <input class="role" type="radio" id="student" name="role" value="student" on:change={handleRoleChange} required>
  <label for="student">Student</label>
</div>

<div>
     <button type="submit">Register</button>
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
     
    input, button{
       display: flex;
       align-items: center;
       justify-content: center;
       width: 130%;
       height: 40%;
       border-radius: 10px;
       border-width: 0;
       box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    button{
        display: grid;
        place-items: center;
        margin-top: 1rem;
        width: 133%;
        height: 1.3rem;
        background-color:  hsl(334, 94%, 46%);
        color: white;
        font-weight: normal;
    }

    input:hover,
    input:focus {
        border-color: hsl(334, 94%, 46%);
    }

    .role {
        width: 0.8rem;
        border-width: 0;
        box-shadow: none;
        background-color: hsl(334, 94%, 46%);
    }

    .checkbox-container,
    .checkbox-label {
        margin-top: 0.3rem;
  display: flex;
  align-items: center;
}

</style>