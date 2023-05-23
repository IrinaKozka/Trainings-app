<script>
  let name = '';
  let email = '';
  let message = '';

  function handleSubmit() {
    const formData = {
      name,
      email,
      message,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

  }
</script>

<div class="container">
    <div class="box">
<form class="form" on:submit={handleSubmit}>
  <label>
    Name:
    <input type="text" bind:value={name} required />
  </label>

  <label>
    Email:
    <input type="email" bind:value={email} required />
  </label>

  <label>
    Message:
    <textarea rows=10 cols=40 bind:value={message} required></textarea>
  </label>

  <button type="submit">Send</button>
</form>

<div class="contact">
    <p>
        <span>Contact</span><br><br>

        Cracovie 31-015<br>
        str. Programming 2/1<br>
        955 555 555<br>
        contact@trainings<br>
            <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-whatsapp"></i>
 </p>
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
      padding-bottom: 10px;
        margin-top: 3rem;
      position: absolute;
      height: 40%;
      width: 100%;
      display: grid;
      place-items: center;
      font-size: 0.8rem;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 400;
      
    }
     
    input, button, textarea{
       display: grid;
       place-items: center;
       height: 40%;
       border-radius: 10px;
       border-width: 0;
       box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    textarea{
        width: 100%;
    }

    button{
        display: grid;
        place-items: center;
        margin-top: 1rem;
        width: 30%;
        height: 1.3rem;
        background-color:  hsl(334, 94%, 46%);
        color: white;
        font-weight: normal;
        cursor: pointer;
    }

   .contact{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 10rem;
    height: 100%;
    font-size: 0.8rem;
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
   }

 span {
    font-weight: bold;
    text-transform: uppercase;
 }
   
</style>