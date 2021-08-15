/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/


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

})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXBwID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdkJhclwiKTtcbiAgY29uc3QgZHJvcERvd25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3AtZG93bi1jb250YWluZXJcIilcbiAgY29uc3QgZ2FtaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1pbmdcIik7XG4gIGNvbnN0IG5vdGVib29rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZWJvb2tzXCIpO1xuICBjb25zdCBjb21wb25lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wb25lbnRzXCIpO1xuICBjb25zdCBtb2JpbGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1uYXZcIik7XG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbW9kYWwtY29udGFpbmVyXCIpO1xuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tb2RhbC1jb250ZW50XCIpO1xuICBjb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250YWluZXItY2xvc2VcIik7XG5cbiAgY29uc3QgbW9iaWxlR2FtaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtZ2FtaW5nXCIpO1xuICBjb25zdCBtb2JpbGVHYW1pbmdEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iLWdhbWluZy1kcm9wZG93blwiKTtcbiAgY29uc3QgbW9iaWxlTm90ZWJvb2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbm90ZWJvb2tzXCIpO1xuICBjb25zdCBtb2JpbGVOb3RlYm9va3NEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iLW5vdGVib29rcy1kcm9wZG93blwiKTtcbiAgY29uc3QgbW9iaWxlQ29tcG9uZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWNvbXBvbmVudHNcIik7XG4gIGNvbnN0IG1vYmlsZUNvbXBvbmVudHNEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iLWNvbXBvbmVudHMtZHJvcGRvd25cIik7XG5cbiAgbW9iaWxlTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICB9KVxuXG4gIG1vZGFsQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZihlLnRhcmdldCA9PT0gbW9iaWxlR2FtaW5nKSBtb2JpbGVHYW1pbmdEcm9wRG93bi5jbGFzc0xpc3QudG9nZ2xlKFwidG9nZ2xlLWRyb3Bkb3duLW1lbnVcIik7XG4gICAgaWYoZS50YXJnZXQgPT09IG1vYmlsZU5vdGVib29rcykgbW9iaWxlTm90ZWJvb2tzRHJvcERvd24uY2xhc3NMaXN0LnRvZ2dsZShcInRvZ2dsZS1kcm9wZG93bi1tZW51XCIpO1xuICAgIGlmIChlLnRhcmdldCA9PT0gbW9iaWxlQ29tcG9uZW50cykgbW9iaWxlQ29tcG9uZW50c0Ryb3BEb3duLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2dnbGUtZHJvcGRvd24tbWVudVwiKVxuICB9KVxuXG4gIG1vZGFsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmKGUudGFyZ2V0ID09PSBtb2RhbENvbnRhaW5lcikgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgaWYoZS50YXJnZXQgPT09IGNsb3NlTW9kYWwgfHwgZS50YXJnZXQucGFyZW50Tm9kZSA9PSBjbG9zZU1vZGFsKSBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIH0pXG5cbiAgbmF2QmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHtcbiAgICBpZihlLnRhcmdldCA9PT0gZ2FtaW5nKSB7XG4gICAgICByZW5kZXJEcm9wRG93bkNvbnRlbnQoXCJnYW1pbmdcIik7XG4gICAgICBlbmFibGVEcm9wRG93bigpO1xuICAgIH1cbiAgICBpZihlLnRhcmdldCA9PT0gbm90ZWJvb2tzKSB7XG4gICAgICByZW5kZXJEcm9wRG93bkNvbnRlbnQoXCJub3RlYm9va1wiKTtcbiAgICAgIGVuYWJsZURyb3BEb3duKCk7XG4gICAgfVxuICAgIGlmKGUudGFyZ2V0ID09PSBjb21wb25lbnRzKSB7XG4gICAgICByZW5kZXJEcm9wRG93bkNvbnRlbnQoXCJjb21wb25lbnRcIik7XG4gICAgICBlbmFibGVEcm9wRG93bigpO1xuICAgIH1cbiAgfSlcbiAgXG4gIGRyb3BEb3duQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIChlKSA9PiB7XG4gICAgcmVtb3ZlRHJvcERvd24oKTtcbiAgfSlcblxuICBjb25zdCBlbmFibGVEcm9wRG93biA9IGZ1bmN0aW9uKCkge1xuICAgIGRyb3BEb3duQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlRHJvcERvd24gPSBmdW5jdGlvbigpIHtcbiAgICBkcm9wRG93bkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgfVxuXG4gIGNvbnN0IHJlbmRlckRyb3BEb3duQ29udGVudCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICBjb25zdCBnYW1pbmdDb250ZW50ID0gYFxuICAgIDxtYWluIGNsYXNzPVwiZ2FtaW5nRHJvcERvd25cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgIDxoND5BcHBhcmVsPC9oND5cbiAgICAgIDx1bCBjbGFzcz1cImFwcGFyZWxcIj5cbiAgICAgICAgPGxpPlQtc2hpcnRzPC9saT5cbiAgICAgICAgPGxpPkhhdHM8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgIDxoND5HYW1pbmcgQWNjZXNzb3JpZXM8L2g0PlxuICAgICAgPHVsIGNsYXNzPVwiZ2FtaW5nLWFjY2Vzc29yaWVzXCI+XG4gICAgICAgIDxsaT5EaWdpdGFsIEV5ZXdlYXI8L2xpPlxuICAgICAgICA8bGk+RmxpZ2h0IFNpbXVsYXRpb248L2xpPlxuICAgICAgICA8bGk+R2FtZXBhZHMgJiBDb250cm9sbGVyczwvbGk+XG4gICAgICAgIDxsaT5Kb3lzdGlja3M8L2xpPlxuICAgICAgICA8bGk+U3RlZXJpbmcgV2hlZWxzPC9saT5cbiAgICAgICAgPGxpPlN0cmVhbWluZyBHZWFyPC9saT5cbiAgICAgICAgPGxpPlZpZGVvIENhcHR1cmU8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgIDxoND5HYW1pbmcgRnVybml0dXJlPC9oND5cbiAgICAgIDx1bCBjbGFzcz1cImdhbWluZy1mdXJuaXR1cmVcIj5cbiAgICAgICAgPGxpPkZsb29yIE1hdHM8L2xpPlxuICAgICAgICA8bGk+R2FtaW5nIENoYWlyczwvbGk+XG4gICAgICAgIDxsaT5HYW1pbmcgRGVza3M8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgIDxoND5WaXJ0dWFsIFJlYWxpdHk8L2g0PlxuICAgICAgPHVsIGNsYXNzPVwidmlydHVhbC1yZWFsaXR5XCI+XG4gICAgICAgIDxsaT5IZWFkc2V0czwvbGk+XG4gICAgICAgIDxsaT5BY2Nlc3NvcmllczwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L21haW4+XG4gIGA7XG4gIGNvbnN0IG5vdGVib29rQ29udGVudCA9IGAgIFxuICA8bWFpbiBjbGFzcz1cIm5vdGVib29rc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNoaWxkMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1yb3dcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiYXJyb3dcIiBzcmM9XCJpbWFnZXMvYXJyb3cucG5nXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPGg0Pk5vdGVib29rcyAmIFRhYmxldHM8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtcm93XCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImFycm93XCIgc3JjPVwiaW1hZ2VzL2Fycm93LnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgIDxoND5CYWdzICYgQWNjZXNzb3JpZXM8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtcm93XCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImFycm93XCIgc3JjPVwiaW1hZ2VzL2Fycm93LnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgIDxoND5Eb2NraW5nIFN0YXRpb25zPC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LXJvd1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJhcnJvd1wiIHNyYz1cImltYWdlcy9hcnJvdy5wbmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8aDQ+UG93ZXIgQWRhcHRvcnM8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtcm93XCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImFycm93XCIgc3JjPVwiaW1hZ2VzL2Fycm93LnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgIDxoND5FeHRlbmRlZCBXYXJyYW50eTwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hpbGQyXCI+XG4gICAgICAgIDxoND5JIG5lZWQgYSBkZXZpY2U6PC9oND5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5Gb3IgSG9tZTwvbGk+XG4gICAgICAgICAgPGxpPkZvciBCdXNpbmVzczwvbGk+XG4gICAgICAgICAgPGxpPkZvciBFZHVjYXRpb248L2xpPlxuICAgICAgICAgIDxsaT5Gb3IgR2FtaW5nPC9saT5cbiAgICAgICAgICA8bGk+Rm9yIENBRCBXb3Jrc3RhdGlvbjwvbGk+XG4gICAgICAgICAgPGxpPlRoYXQncyBVbHRhIFBvcnRhYmxlPC9saT5cbiAgICAgICAgICA8bGk+VGhhdCBDb252ZXJ0cyBJbnRvIGEgVGFibGUgLSAyIGluIDE8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDQ+U2hvcCBCeSBTY3JlZW5zaXplPC9oND5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT4xNFwiIGFuZCB1bmRlcjwvbGk+XG4gICAgICAgICAgPGxpPkNsYXNzaWMgMTVcIjY8L2xpPlxuICAgICAgICAgIDxsaT4xN1wiIGFuZCB1cDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxoND5TaG9wIGJ5IGJyYW5kOjwvaDQ+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJicmFuZC1pbWFnZXNcInNyYz1cImltYWdlcy9hc3VzLnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiYnJhbmQtaW1hZ2VzXCIgc3JjPVwiaW1hZ2VzL2dpZ2FieXRlLnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiYnJhbmQtaW1hZ2VzXCIgc3JjPVwiaW1hZ2VzL21zaS5wbmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cImJyYW5kLWltYWdlc1wiIHNyYz1cImltYWdlcy9yYXplci5wbmdcIiBhbHQ9XCJcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgICBgO1xuICAgIGNvbnN0IGNvbXBvbmVudENvbnRlbnQgPSBgICAgXG4gICAgPG1haW4gY2xhc3M9XCJjb21wb25lbnRcIj5cbiAgICA8ZGl2PlxuICAgICAgPGg0PkNQVXM8L2g0PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+QU1EIHNUUlg0PC9saT5cbiAgICAgICAgPGxpPkludGVsIExHQTEyMDA8L2xpPlxuICAgICAgICA8bGk+QU1EIHNXUlg4PC9saT5cbiAgICAgICAgPGxpPkFNRCBBTTQ8L2xpPlxuICAgICAgICA8bGk+SW50ZWwgTEdBMjA2NjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8aDQ+R3JhcGhpY3MgQ2FyZHM8L2g0PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+QU1EIFdvcmtzdGF0aW9uPC9saT5cbiAgICAgICAgPGxpPkV4dGVybmFsIERpc3BsYXkgQWRhcHRlcnM8L2xpPlxuICAgICAgICA8bGk+QU1EIFJhZGVvbjwvbGk+XG4gICAgICAgIDxsaT5OdmlkaWEgR2VGb3JjZTwvbGk+XG4gICAgICAgIDxsaT5OdmlkaWEgV29ya3N0YXRpb248L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGg0PkhhcmQgRHJpdmVzICYgU1NEczwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT4yLjVcIiBIREQ8L2xpPlxuICAgICAgICA8bGk+My41XCIgSEREPC9saT5cbiAgICAgICAgPGxpPjIuNVwiIFNTRDwvbGk+XG4gICAgICAgIDxsaT5NLjIgU1NEPC9saT5cbiAgICAgICAgPGxpPk5BUyBIYXJkIERyaXZlczwvbGk+XG4gICAgICAgIDxsaT5QQ0kgRXhwcmVzcyBTU0Q8L2xpPlxuICAgICAgICA8bGk+U3VydmVpbGxhbmNlIEhERDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8aDQ+TWVtb3J5IChSQU0pPC9oND5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPkRlc2t0b3AgTWVtb3J5PC9saT5cbiAgICAgICAgPGxpPk5vdGVib29rIE1lbW9yeTwvbGk+XG4gICAgICAgIDxsaT5TZXJ2ZXIgTWVtb3J5PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxoND5Nb3RoZXJib2FyZHM8L2g0PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+QU1EIFNvY2tldCBzV1JYODwvbGk+XG4gICAgICAgIDxsaT5Nb3RoZXJib2FyZCBBY2Nlc3NvcmllczwvbGk+XG4gICAgICAgIDxsaT5BTUQgU29ja2V0IEFNNDwvbGk+XG4gICAgICAgIDxsaT5BTUQgU29ja2V0IFRSWDQ8L2xpPlxuICAgICAgICA8bGk+SW50ZWwgU29ja2V0IDExNTEtQ0w8L2xpPlxuICAgICAgICA8bGk+SW50ZWwgU29ja2V0IDEyMDA8L2xpPlxuICAgICAgICA8bGk+SW50ZWwgU29ja2V0IDIwMTEtMzwvbGk+XG4gICAgICAgIDxsaT5JbnRlbCBTb2NrZXQgMjA2NlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGg0Pk9wdGljYWwgRHJpdmVzPC9oND5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPkJsdS1SYXkgRHJpdmU8L2xpPlxuICAgICAgICA8bGk+RFZEIERyaXZlPC9saT5cbiAgICAgICAgPGxpPkV4dGVybmFsIChVU0IpPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxoND5Qb3dlciBTdXBwbGllczwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT44MFBsdXMgV2hpdGU8L2xpPlxuICAgICAgICA8bGk+ODBQbHVzIEJyb256ZTwvbGk+XG4gICAgICAgIDxsaT44MFBsdXMgR29sZDwvbGk+XG4gICAgICAgIDxsaT44MFBsdXMgUGxhdGludW08L2xpPlxuICAgICAgICA8bGk+ODBQbHVzIFRpdGFuaXVtPC9saT5cbiAgICAgICAgPGxpPlVwIHRvIDYwMFc8L2xpPlxuICAgICAgICA8bGk+NjUwVy04MDBXPC9saT5cbiAgICAgICAgPGxpPjw4MDBXLTEwMDBXL2xpPlxuICAgICAgICA8bGk+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxoND5Tb3VuZCBDYXJkczwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5FeHRlcm5hbCAoVVNCKTwvbGk+XG4gICAgICAgIDxsaT5QQ0llPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvbWFpbj5cbiAgYDtcblxuICAgIHN3aXRjaCAoY29udGVudCkge1xuICAgICAgY2FzZSBcImdhbWluZ1wiOlxuICAgICAgICBzZXRDb250ZW50KGdhbWluZ0NvbnRlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJub3RlYm9va1wiOlxuICAgICAgICBzZXRDb250ZW50KG5vdGVib29rQ29udGVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImNvbXBvbmVudFwiOlxuICAgICAgICBzZXRDb250ZW50KGNvbXBvbmVudENvbnRlbnQpO1xuICAgICAgICBicmVhaztcbiAgICB9IFxuICB9XG5cbiAgY29uc3Qgc2V0Q29udGVudCA9IGZ1bmN0aW9uKGNvbnRlbnRUeXBlKSB7XG4gICAgZHJvcERvd25Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgZHJvcERvd25Db250YWluZXIuaW5uZXJIVE1MID0gY29udGVudFR5cGVcbiAgfVxuXG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=