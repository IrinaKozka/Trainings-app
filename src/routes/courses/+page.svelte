<script>
let courses = [
];
let addToCard = 0;
let user = {
    role: ''
  }
  let isAuthenticated = false;
</script>

<div class="courses">

         <div class="info">
              
  {#each courses as course (course.id)}
  
      <h2>{course.title}</h2>
      <img src={course.image_url} alt="">
        <p><i class="fa-regular fa-calendar"></i>{course.date}</p>
        <p><i class="fa-solid fa-language"></i>{course.language}</p>
        <p><i class="fa-solid fa-location-dot"></i>{course.location}</p>
     

        <p><i class="fa-regular fa-clock"></i>{course.startTime}{course.finishTime}</p>
        <p><i class="fa-solid fa-chart-simple"></i>{course.level}</p>
        <p><i class="fa-regular fa-user"></i>{course.trainer}</p>
      
      
      {#if user && user.role === 'trainer'}
        <button disabled>Add to cart</button>
      {:else if isAuthenticated}
        <button on:click={() => addToCard(course)}>Add to cart</button>
      {:else}
        <!-- <button disabled>Please<a href="/login"> log in </a>if you want add to card</button> -->
      {/if}
  
  {/each}

</div>
</div>

<style>
  .courses {
    position: absolute;
    width: 90%;
    height: 32%;
    left: 5%;
    top: 10%;
    display: flex;
    background-color: rgba(197, 195, 195, 0.33);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  
  }

  .info {
     position: absolute;
    width: 90%;
    height: 80%;
    left: 5%;
    top: 10%;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin-bottom: 0;
    flood-color: aliceblue;
    font-size: 0.8rem;
    font-weight: 250;
  }

  div.info > * {
    flex-basis: 50%;
    box-sizing: border-box;
  }
  i {
    margin-right: 0.6rem;
    margin-left: 2rem;
    margin-top: 0;
  }

  div.info h2 {
    width: 100%;
    text-align: center;
  }


</style>