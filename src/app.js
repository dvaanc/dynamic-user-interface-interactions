'use strict';

const app = (function() {
  const navBar = document.querySelector("#navBar");
  const dropDownContainer = document.querySelector("#drop-down-container")
  const gaming = document.querySelector("#gaming");
  const notebooks = document.querySelector("#notebooks");
  const components = document.querySelector("#components");
  const mobileNav = document.querySelector(".mobile-nav");
  const modalContainer = document.querySelector(".mobile-modal-container");
  const modalContent = document.querySelector(".mobile-modal-content");
  const closeModal = document.querySelector(".modal-container-close");

  const mobileGaming = document.querySelector("#mobile-gaming");
  const mobileGamingDropDown = document.querySelector("#mob-gaming-dropdown");
  const mobileNotebooks = document.querySelector("#mobile-notebooks");
  const mobileNotebooksDropDown = document.querySelector("#mob-notebooks-dropdown");
  const mobileComponents = document.querySelector("#mobile-components");
  const mobileComponentsDropDown = document.querySelector("#mob-components-dropdown");



  mobileNav.addEventListener("click", (e) => {
    modalContainer.classList.add("show");
  })

  modalContent.addEventListener("click", (e) => {
    if(e.target === mobileGaming) mobileGamingDropDown.classList.toggle("toggle-dropdown-menu");
    if(e.target === mobileNotebooks) mobileNotebooksDropDown.classList.toggle("toggle-dropdown-menu");
    if (e.target === mobileComponents) mobileComponentsDropDown.classList.toggle("toggle-dropdown-menu")
  })

  modalContainer.addEventListener("click", (e) => {
    if(e.target === modalContainer) modalContainer.classList.remove("show");
    if(e.target === closeModal || e.target.parentNode == closeModal) modalContainer.classList.remove('show');
  })

  navBar.addEventListener("mouseover", (e) => {
    if(e.target === gaming) {
      renderDropDownContent("gaming");
      enableDropDown();
    }
    if(e.target === notebooks) {
      renderDropDownContent("notebook");
      enableDropDown();
    }
    if(e.target === components) {
      renderDropDownContent("component");
      enableDropDown();
    }
  })
  
  dropDownContainer.addEventListener("mouseleave", (e) => {
    removeDropDown();
  })

  const enableDropDown = function() {
    dropDownContainer.classList.add("show");
  }

  const removeDropDown = function() {
    dropDownContainer.classList.remove("show");
  }

  const renderDropDownContent = function(content) {
    const gamingContent = `
    <main class="gamingDropDown">
    <div class="child">
      <h4>Apparel</h4>
      <ul class="apparel">
        <li>T-shirts</li>
        <li>Hats</li>
      </ul>
    </div>
    <div class="child">
      <h4>Gaming Accessories</h4>
      <ul class="gaming-accessories">
        <li>Digital Eyewear</li>
        <li>Flight Simulation</li>
        <li>Gamepads & Controllers</li>
        <li>Joysticks</li>
        <li>Steering Wheels</li>
        <li>Streaming Gear</li>
        <li>Video Capture</li>
      </ul>
    </div>
    <div class="child">
      <h4>Gaming Furniture</h4>
      <ul class="gaming-furniture">
        <li>Floor Mats</li>
        <li>Gaming Chairs</li>
        <li>Gaming Desks</li>
      </ul>
    </div>
    <div class="child">
      <h4>Virtual Reality</h4>
      <ul class="virtual-reality">
        <li>Headsets</li>
        <li>Accessories</li>
      </ul>
    </div>
  </main>
  `;
  const notebookContent = `  
  <main class="notebooks">
      <div class="child2">
        <div class="flex-row">
          <img class="arrow" src="images/arrow.png" alt="">
          <h4>Notebooks & Tablets</h4>
        </div>
        <div class="flex-row">
          <img class="arrow" src="images/arrow.png" alt="">
          <h4>Bags & Accessories</h4>
        </div>
        <div class="flex-row">
          <img class="arrow" src="images/arrow.png" alt="">
          <h4>Docking Stations</h4>
        </div>
        <div class="flex-row">
          <img class="arrow" src="images/arrow.png" alt="">
          <h4>Power Adaptors</h4>
        </div>
        <div class="flex-row">
          <img class="arrow" src="images/arrow.png" alt="">
          <h4>Extended Warranty</h4>
        </div>
      </div>
      <div class="child2">
        <h4>I need a device:</h4>
        <ul>
          <li>For Home</li>
          <li>For Business</li>
          <li>For Education</li>
          <li>For Gaming</li>
          <li>For CAD Workstation</li>
          <li>That's Ulta Portable</li>
          <li>That Converts Into a Table - 2 in 1</li>
        </ul>
      </div>
      <div>
        <h4>Shop By Screensize</h4>
        <ul>
          <li>14" and under</li>
          <li>Classic 15"6</li>
          <li>17" and up</li>
        </ul>
        <h4>Shop by brand:</h4>
        <img class="brand-images"src="images/asus.png" alt="">
        <img class="brand-images" src="images/gigabyte.png" alt="">
        <img class="brand-images" src="images/msi.png" alt="">
        <img class="brand-images" src="images/razer.png" alt="">
      </div>
    </main>
    `;
    const componentContent = `   
    <main class="component">
    <div>
      <h4>CPUs</h4>
      <ul>
        <li>AMD sTRX4</li>
        <li>Intel LGA1200</li>
        <li>AMD sWRX8</li>
        <li>AMD AM4</li>
        <li>Intel LGA2066</li>
      </ul>
    </div>
    <div>
      <h4>Graphics Cards</h4>
      <ul>
        <li>AMD Workstation</li>
        <li>External Display Adapters</li>
        <li>AMD Radeon</li>
        <li>Nvidia GeForce</li>
        <li>Nvidia Workstation</li>
      </ul>
    </div>
    <div>
      <h4>Hard Drives & SSDs</h4>
      <ul>
        <li>2.5" HDD</li>
        <li>3.5" HDD</li>
        <li>2.5" SSD</li>
        <li>M.2 SSD</li>
        <li>NAS Hard Drives</li>
        <li>PCI Express SSD</li>
        <li>Surveillance HDD</li>
      </ul>
    </div>
    <div>
      <h4>Memory (RAM)</h4>
      <ul>
        <li>Desktop Memory</li>
        <li>Notebook Memory</li>
        <li>Server Memory</li>
      </ul>
    </div>
    <div>
      <h4>Motherboards</h4>
      <ul>
        <li>AMD Socket sWRX8</li>
        <li>Motherboard Accessories</li>
        <li>AMD Socket AM4</li>
        <li>AMD Socket TRX4</li>
        <li>Intel Socket 1151-CL</li>
        <li>Intel Socket 1200</li>
        <li>Intel Socket 2011-3</li>
        <li>Intel Socket 2066
        </li>
      </ul>
    </div>
    <div>
      <h4>Optical Drives</h4>
      <ul>
        <li>Blu-Ray Drive</li>
        <li>DVD Drive</li>
        <li>External (USB)</li>
      </ul>
    </div>
    <div>
      <h4>Power Supplies</h4>
      <ul>
        <li>80Plus White</li>
        <li>80Plus Bronze</li>
        <li>80Plus Gold</li>
        <li>80Plus Platinum</li>
        <li>80Plus Titanium</li>
        <li>Up to 600W</li>
        <li>650W-800W</li>
        <li><800W-1000W/li>
        <li></li>
      </ul>
    </div>
    <div>
      <h4>Sound Cards</h4>
      <ul>
        <li>External (USB)</li>
        <li>PCIe</li>
      </ul>
    </div>
  </main>
  `;

    switch (content) {
      case "gaming":
        setContent(gamingContent);
        break;
      case "notebook":
        setContent(notebookContent);
        break;
      case "component":
        setContent(componentContent);
        break;
    } 
  }

  const setContent = function(contentType) {
    dropDownContainer.innerHTML = '';
    dropDownContainer.innerHTML = contentType
  }

  const backwards = document.querySelector("#backwards");
  const forwards = document.querySelector("#forwards");
  const images = Array.from(document.querySelectorAll(".image"));
  let imageNumber = 0;
  images[imageNumber].classList.add("image-show");

  backwards.addEventListener("click", (e) => {
    imageNumber--;
    imageSlider(imageNumber);
    console.log(imageNumber);
  })

  forwards.addEventListener("click", (e) => {
    imageNumber++;
    imageSlider(imageNumber);
    console.log(imageNumber);
  })
 
  const imageSlider = function(number) {
    if(imageNumber > 4) imageNumber = 0;
    if(imageNumber < 0) imageNumber = 4;
    for(const elem in images) images[elem].classList.remove("image-show");
    images[imageNumber].classList.add("image-show");
  }

})();