* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  body {
    background-color: #f7f7ff;
  }
  
  .wrapper,
  .favorite-container {
    width: min(500px, 90%);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    padding: 5em 3em;
    box-shadow: 0 5px 40px 0 rgba(88, 83, 153, 0.15);
    border-radius: 1em;
    background-color: rgb(69, 121, 225);
  }
  
  .container {
    text-align: center;
  }
  
  .container p {
    color: #d6d6d6;
    margin: 1em 0 1.5em 0;
  }
  
  .container h3 {
    color: #ffffff;
  }
  
  .wrapper #btn,
  .favorite-container button {
    background-color: #ffffff;
    border: none;
    padding: 1em 2em;
    border-radius: 3em;
    margin-top: 4em;
  }
  
  .button-container {
    display: flex;
    justify-content: end;
    gap: 1em;
  }
  
  .button-container button {
    background-color: transparent;
    border: none;
    color: #ffffff;
    font-size: 1.2em;
  }
  
  .favorite-container h3 {
    color: #ffffff;
  }
  
  .favorite-container ul {
    list-style: none;
    color: #d6d6d6;
  }
  
  .favorite-container li {
    padding: 1em 0;
  }
  
  .active {
    color: red;
  }
  
