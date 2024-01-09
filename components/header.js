class Header extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback(){
    this.innerHTML = `
    <div class="header">
        <h1>Justin Segawa's Projects Page</h1>
    </div>

    <div class="navbar">
        <a href="index.html">Main Page</a>
        <a href="wolvsoftblog.html">WolverineSoft Devblog</a>
        <a href="https://wolverinesoft-studio.itch.io/subtension">Download Subtension!</a>
        <a href="eecs498.html">EECS498 Projects</a>
        <a href="eecs494.html">EECS494 Projects</a>
    </div>`;
    }

  }
  
  customElements.define('header-component', Header);
