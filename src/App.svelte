<script>
  import svelteLogo from "./logoSvelte.png";

  function logout() {}
</script>

<style>
  .header {
    padding: 10px 15px;
    height: 80px;
    display: inline-flex;
    align-items: center;
    background-color: #fe3c00;
    width: 100%;
  }

  .header img {
    width: 60px;
  }
  .header .link-container {
    padding: 0 20px;
  }

  .header a,
  .header button {
    font-weight: bold;
    font-size: 25px;
    color: #fff;
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fe3c00;
    height: 80px;
    align-items: center;
    display: inline-flex;
  }
  .footer img {
    margin: auto;
    width: 50px;
  }
</style>

<div>
  <div class="header">
    <img alt="logo" src={svelteLogo} />
    <div class="link-container">
      <a href="/home">Home</a>
    </div>
    <div class="link-container">
      <a href="/users">Users</a>
    </div>
    <div class="link-container">
      <button on:click={logout}>Logout</button>
    </div>
  </div>
  <div class="footer">
    <img alt="logo" src={svelteLogo} />
  </div>
</div>
