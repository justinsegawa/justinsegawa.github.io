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
        <a href="https://wolverinesoft-studio.itch.io/subtension" target="_blank" rel="noopener noreferrer">Download Subtension!</a>
        <a href="eecs494.html">Gamedev Course Projects</a>
        <a href="eecs498.html">VR/AR Projects</a>
        <a href="coursework.html">Other Courses</a>
    </div>`;
    }

  }
  
  customElements.define('header-component', Header);
