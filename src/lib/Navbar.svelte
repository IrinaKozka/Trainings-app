<script>
      const navs = [
        {
            title: "Home",
            href: "/",
        },
                {
            title: "About",
            href: "/about",
        },
                {
            title: "Courses",
            href: "/courses",
        },
                {
            title: "Contact",
            href: "/contact",
        },
                {
            title: "Log in",
            href: "/login",
        },
    ]
    
</script>
 

<nav>
  <div class="container">
   <i class="fa-solid fa-graduation-cap"></i>

      <h1>trainings</h1>
  <ul>
    {#each navs as { title, href }}
    <li>
      <a {href} >{title}</a>
    </li>
    {/each}
  </ul>
    </div>
    </nav>

<style>
  nav {
 
    padding: 0.5rem;
    background-color: hsl(334, 94%, 46%);
    color: aliceblue;
    min-width: 640px;
  }

  .container{
        display: flex;
        align-items: center;
  }
  ul {
    margin: 0;
    margin-left:auto ;
    display: flex;
    list-style: none;
    font-size: 1rem;
  }
  li{
    margin-right: 20px;
  }
  
  h1 {

    margin:0;
    text-decoration: solid;
    color: aliceblue;
    font-size: 1.3rem;
    font-weight: normal;
    text-transform: uppercase;
    font-weight:inherit;
  }

  a {
    color:aliceblue;
    text-decoration: none;
    font-weight:lighter;
      }
  a:hover{
    color: black;
  }

</style>