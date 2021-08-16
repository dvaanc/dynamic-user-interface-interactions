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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFwcCA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZCYXJcIik7XG4gIGNvbnN0IGRyb3BEb3duQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcm9wLWRvd24tY29udGFpbmVyXCIpXG4gIGNvbnN0IGdhbWluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtaW5nXCIpO1xuICBjb25zdCBub3RlYm9va3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVib29rc1wiKTtcbiAgY29uc3QgY29tcG9uZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcG9uZW50c1wiKTtcbiAgY29uc3QgbW9iaWxlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbmF2XCIpO1xuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1vZGFsLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbW9kYWwtY29udGVudFwiKTtcbiAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGFpbmVyLWNsb3NlXCIpO1xuXG4gIGNvbnN0IG1vYmlsZUdhbWluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWdhbWluZ1wiKTtcbiAgY29uc3QgbW9iaWxlR2FtaW5nRHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYi1nYW1pbmctZHJvcGRvd25cIik7XG4gIGNvbnN0IG1vYmlsZU5vdGVib29rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW5vdGVib29rc1wiKTtcbiAgY29uc3QgbW9iaWxlTm90ZWJvb2tzRHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYi1ub3RlYm9va3MtZHJvcGRvd25cIik7XG4gIGNvbnN0IG1vYmlsZUNvbXBvbmVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1jb21wb25lbnRzXCIpO1xuICBjb25zdCBtb2JpbGVDb21wb25lbnRzRHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYi1jb21wb25lbnRzLWRyb3Bkb3duXCIpO1xuXG5cblxuICBtb2JpbGVOYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gIH0pXG5cbiAgbW9kYWxDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmKGUudGFyZ2V0ID09PSBtb2JpbGVHYW1pbmcpIG1vYmlsZUdhbWluZ0Ryb3BEb3duLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2dnbGUtZHJvcGRvd24tbWVudVwiKTtcbiAgICBpZihlLnRhcmdldCA9PT0gbW9iaWxlTm90ZWJvb2tzKSBtb2JpbGVOb3RlYm9va3NEcm9wRG93bi5jbGFzc0xpc3QudG9nZ2xlKFwidG9nZ2xlLWRyb3Bkb3duLW1lbnVcIik7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBtb2JpbGVDb21wb25lbnRzKSBtb2JpbGVDb21wb25lbnRzRHJvcERvd24uY2xhc3NMaXN0LnRvZ2dsZShcInRvZ2dsZS1kcm9wZG93bi1tZW51XCIpXG4gIH0pXG5cbiAgbW9kYWxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYoZS50YXJnZXQgPT09IG1vZGFsQ29udGFpbmVyKSBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICBpZihlLnRhcmdldCA9PT0gY2xvc2VNb2RhbCB8fCBlLnRhcmdldC5wYXJlbnROb2RlID09IGNsb3NlTW9kYWwpIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgfSlcblxuICBuYXZCYXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuICAgIGlmKGUudGFyZ2V0ID09PSBnYW1pbmcpIHtcbiAgICAgIHJlbmRlckRyb3BEb3duQ29udGVudChcImdhbWluZ1wiKTtcbiAgICAgIGVuYWJsZURyb3BEb3duKCk7XG4gICAgfVxuICAgIGlmKGUudGFyZ2V0ID09PSBub3RlYm9va3MpIHtcbiAgICAgIHJlbmRlckRyb3BEb3duQ29udGVudChcIm5vdGVib29rXCIpO1xuICAgICAgZW5hYmxlRHJvcERvd24oKTtcbiAgICB9XG4gICAgaWYoZS50YXJnZXQgPT09IGNvbXBvbmVudHMpIHtcbiAgICAgIHJlbmRlckRyb3BEb3duQ29udGVudChcImNvbXBvbmVudFwiKTtcbiAgICAgIGVuYWJsZURyb3BEb3duKCk7XG4gICAgfVxuICB9KVxuICBcbiAgZHJvcERvd25Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcbiAgICByZW1vdmVEcm9wRG93bigpO1xuICB9KVxuXG4gIGNvbnN0IGVuYWJsZURyb3BEb3duID0gZnVuY3Rpb24oKSB7XG4gICAgZHJvcERvd25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gIH1cblxuICBjb25zdCByZW1vdmVEcm9wRG93biA9IGZ1bmN0aW9uKCkge1xuICAgIGRyb3BEb3duQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICB9XG5cbiAgY29uc3QgcmVuZGVyRHJvcERvd25Db250ZW50ID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgIGNvbnN0IGdhbWluZ0NvbnRlbnQgPSBgXG4gICAgPG1haW4gY2xhc3M9XCJnYW1pbmdEcm9wRG93blwiPlxuICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgPGg0PkFwcGFyZWw8L2g0PlxuICAgICAgPHVsIGNsYXNzPVwiYXBwYXJlbFwiPlxuICAgICAgICA8bGk+VC1zaGlydHM8L2xpPlxuICAgICAgICA8bGk+SGF0czwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgPGg0PkdhbWluZyBBY2Nlc3NvcmllczwvaDQ+XG4gICAgICA8dWwgY2xhc3M9XCJnYW1pbmctYWNjZXNzb3JpZXNcIj5cbiAgICAgICAgPGxpPkRpZ2l0YWwgRXlld2VhcjwvbGk+XG4gICAgICAgIDxsaT5GbGlnaHQgU2ltdWxhdGlvbjwvbGk+XG4gICAgICAgIDxsaT5HYW1lcGFkcyAmIENvbnRyb2xsZXJzPC9saT5cbiAgICAgICAgPGxpPkpveXN0aWNrczwvbGk+XG4gICAgICAgIDxsaT5TdGVlcmluZyBXaGVlbHM8L2xpPlxuICAgICAgICA8bGk+U3RyZWFtaW5nIEdlYXI8L2xpPlxuICAgICAgICA8bGk+VmlkZW8gQ2FwdHVyZTwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgPGg0PkdhbWluZyBGdXJuaXR1cmU8L2g0PlxuICAgICAgPHVsIGNsYXNzPVwiZ2FtaW5nLWZ1cm5pdHVyZVwiPlxuICAgICAgICA8bGk+Rmxvb3IgTWF0czwvbGk+XG4gICAgICAgIDxsaT5HYW1pbmcgQ2hhaXJzPC9saT5cbiAgICAgICAgPGxpPkdhbWluZyBEZXNrczwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgPGg0PlZpcnR1YWwgUmVhbGl0eTwvaDQ+XG4gICAgICA8dWwgY2xhc3M9XCJ2aXJ0dWFsLXJlYWxpdHlcIj5cbiAgICAgICAgPGxpPkhlYWRzZXRzPC9saT5cbiAgICAgICAgPGxpPkFjY2Vzc29yaWVzPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvbWFpbj5cbiAgYDtcbiAgY29uc3Qgbm90ZWJvb2tDb250ZW50ID0gYCAgXG4gIDxtYWluIGNsYXNzPVwibm90ZWJvb2tzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hpbGQyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LXJvd1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJhcnJvd1wiIHNyYz1cImltYWdlcy9hcnJvdy5wbmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8aDQ+Tm90ZWJvb2tzICYgVGFibGV0czwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1yb3dcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiYXJyb3dcIiBzcmM9XCJpbWFnZXMvYXJyb3cucG5nXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPGg0PkJhZ3MgJiBBY2Nlc3NvcmllczwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1yb3dcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiYXJyb3dcIiBzcmM9XCJpbWFnZXMvYXJyb3cucG5nXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPGg0PkRvY2tpbmcgU3RhdGlvbnM8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtcm93XCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImFycm93XCIgc3JjPVwiaW1hZ2VzL2Fycm93LnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgIDxoND5Qb3dlciBBZGFwdG9yczwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1yb3dcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiYXJyb3dcIiBzcmM9XCJpbWFnZXMvYXJyb3cucG5nXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPGg0PkV4dGVuZGVkIFdhcnJhbnR5PC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZDJcIj5cbiAgICAgICAgPGg0PkkgbmVlZCBhIGRldmljZTo8L2g0PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPkZvciBIb21lPC9saT5cbiAgICAgICAgICA8bGk+Rm9yIEJ1c2luZXNzPC9saT5cbiAgICAgICAgICA8bGk+Rm9yIEVkdWNhdGlvbjwvbGk+XG4gICAgICAgICAgPGxpPkZvciBHYW1pbmc8L2xpPlxuICAgICAgICAgIDxsaT5Gb3IgQ0FEIFdvcmtzdGF0aW9uPC9saT5cbiAgICAgICAgICA8bGk+VGhhdCdzIFVsdGEgUG9ydGFibGU8L2xpPlxuICAgICAgICAgIDxsaT5UaGF0IENvbnZlcnRzIEludG8gYSBUYWJsZSAtIDIgaW4gMTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoND5TaG9wIEJ5IFNjcmVlbnNpemU8L2g0PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPjE0XCIgYW5kIHVuZGVyPC9saT5cbiAgICAgICAgICA8bGk+Q2xhc3NpYyAxNVwiNjwvbGk+XG4gICAgICAgICAgPGxpPjE3XCIgYW5kIHVwPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGg0PlNob3AgYnkgYnJhbmQ6PC9oND5cbiAgICAgICAgPGltZyBjbGFzcz1cImJyYW5kLWltYWdlc1wic3JjPVwiaW1hZ2VzL2FzdXMucG5nXCIgYWx0PVwiXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJicmFuZC1pbWFnZXNcIiBzcmM9XCJpbWFnZXMvZ2lnYWJ5dGUucG5nXCIgYWx0PVwiXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJicmFuZC1pbWFnZXNcIiBzcmM9XCJpbWFnZXMvbXNpLnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiYnJhbmQtaW1hZ2VzXCIgc3JjPVwiaW1hZ2VzL3JhemVyLnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICAgIGA7XG4gICAgY29uc3QgY29tcG9uZW50Q29udGVudCA9IGAgICBcbiAgICA8bWFpbiBjbGFzcz1cImNvbXBvbmVudFwiPlxuICAgIDxkaXY+XG4gICAgICA8aDQ+Q1BVczwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5BTUQgc1RSWDQ8L2xpPlxuICAgICAgICA8bGk+SW50ZWwgTEdBMTIwMDwvbGk+XG4gICAgICAgIDxsaT5BTUQgc1dSWDg8L2xpPlxuICAgICAgICA8bGk+QU1EIEFNNDwvbGk+XG4gICAgICAgIDxsaT5JbnRlbCBMR0EyMDY2PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxoND5HcmFwaGljcyBDYXJkczwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5BTUQgV29ya3N0YXRpb248L2xpPlxuICAgICAgICA8bGk+RXh0ZXJuYWwgRGlzcGxheSBBZGFwdGVyczwvbGk+XG4gICAgICAgIDxsaT5BTUQgUmFkZW9uPC9saT5cbiAgICAgICAgPGxpPk52aWRpYSBHZUZvcmNlPC9saT5cbiAgICAgICAgPGxpPk52aWRpYSBXb3Jrc3RhdGlvbjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8aDQ+SGFyZCBEcml2ZXMgJiBTU0RzPC9oND5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPjIuNVwiIEhERDwvbGk+XG4gICAgICAgIDxsaT4zLjVcIiBIREQ8L2xpPlxuICAgICAgICA8bGk+Mi41XCIgU1NEPC9saT5cbiAgICAgICAgPGxpPk0uMiBTU0Q8L2xpPlxuICAgICAgICA8bGk+TkFTIEhhcmQgRHJpdmVzPC9saT5cbiAgICAgICAgPGxpPlBDSSBFeHByZXNzIFNTRDwvbGk+XG4gICAgICAgIDxsaT5TdXJ2ZWlsbGFuY2UgSEREPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxoND5NZW1vcnkgKFJBTSk8L2g0PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+RGVza3RvcCBNZW1vcnk8L2xpPlxuICAgICAgICA8bGk+Tm90ZWJvb2sgTWVtb3J5PC9saT5cbiAgICAgICAgPGxpPlNlcnZlciBNZW1vcnk8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGg0Pk1vdGhlcmJvYXJkczwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5BTUQgU29ja2V0IHNXUlg4PC9saT5cbiAgICAgICAgPGxpPk1vdGhlcmJvYXJkIEFjY2Vzc29yaWVzPC9saT5cbiAgICAgICAgPGxpPkFNRCBTb2NrZXQgQU00PC9saT5cbiAgICAgICAgPGxpPkFNRCBTb2NrZXQgVFJYNDwvbGk+XG4gICAgICAgIDxsaT5JbnRlbCBTb2NrZXQgMTE1MS1DTDwvbGk+XG4gICAgICAgIDxsaT5JbnRlbCBTb2NrZXQgMTIwMDwvbGk+XG4gICAgICAgIDxsaT5JbnRlbCBTb2NrZXQgMjAxMS0zPC9saT5cbiAgICAgICAgPGxpPkludGVsIFNvY2tldCAyMDY2XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8aDQ+T3B0aWNhbCBEcml2ZXM8L2g0PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+Qmx1LVJheSBEcml2ZTwvbGk+XG4gICAgICAgIDxsaT5EVkQgRHJpdmU8L2xpPlxuICAgICAgICA8bGk+RXh0ZXJuYWwgKFVTQik8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGg0PlBvd2VyIFN1cHBsaWVzPC9oND5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPjgwUGx1cyBXaGl0ZTwvbGk+XG4gICAgICAgIDxsaT44MFBsdXMgQnJvbnplPC9saT5cbiAgICAgICAgPGxpPjgwUGx1cyBHb2xkPC9saT5cbiAgICAgICAgPGxpPjgwUGx1cyBQbGF0aW51bTwvbGk+XG4gICAgICAgIDxsaT44MFBsdXMgVGl0YW5pdW08L2xpPlxuICAgICAgICA8bGk+VXAgdG8gNjAwVzwvbGk+XG4gICAgICAgIDxsaT42NTBXLTgwMFc8L2xpPlxuICAgICAgICA8bGk+PDgwMFctMTAwMFcvbGk+XG4gICAgICAgIDxsaT48L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGg0PlNvdW5kIENhcmRzPC9oND5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPkV4dGVybmFsIChVU0IpPC9saT5cbiAgICAgICAgPGxpPlBDSWU8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9tYWluPlxuICBgO1xuXG4gICAgc3dpdGNoIChjb250ZW50KSB7XG4gICAgICBjYXNlIFwiZ2FtaW5nXCI6XG4gICAgICAgIHNldENvbnRlbnQoZ2FtaW5nQ29udGVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm5vdGVib29rXCI6XG4gICAgICAgIHNldENvbnRlbnQobm90ZWJvb2tDb250ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiY29tcG9uZW50XCI6XG4gICAgICAgIHNldENvbnRlbnQoY29tcG9uZW50Q29udGVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH0gXG4gIH1cblxuICBjb25zdCBzZXRDb250ZW50ID0gZnVuY3Rpb24oY29udGVudFR5cGUpIHtcbiAgICBkcm9wRG93bkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBkcm9wRG93bkNvbnRhaW5lci5pbm5lckhUTUwgPSBjb250ZW50VHlwZVxuICB9XG5cbiAgY29uc3QgYmFja3dhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYWNrd2FyZHNcIik7XG4gIGNvbnN0IGZvcndhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3J3YXJkc1wiKTtcbiAgY29uc3QgaW1hZ2VzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltYWdlXCIpKTtcbiAgbGV0IGltYWdlTnVtYmVyID0gMDtcbiAgaW1hZ2VzW2ltYWdlTnVtYmVyXS5jbGFzc0xpc3QuYWRkKFwiaW1hZ2Utc2hvd1wiKTtcblxuICBiYWNrd2FyZHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaW1hZ2VOdW1iZXItLTtcbiAgICBpbWFnZVNsaWRlcihpbWFnZU51bWJlcik7XG4gICAgY29uc29sZS5sb2coaW1hZ2VOdW1iZXIpO1xuICB9KVxuXG4gIGZvcndhcmRzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGltYWdlTnVtYmVyKys7XG4gICAgaW1hZ2VTbGlkZXIoaW1hZ2VOdW1iZXIpO1xuICAgIGNvbnNvbGUubG9nKGltYWdlTnVtYmVyKTtcbiAgfSlcbiBcbiAgY29uc3QgaW1hZ2VTbGlkZXIgPSBmdW5jdGlvbihudW1iZXIpIHtcbiAgICBpZihpbWFnZU51bWJlciA+IDQpIGltYWdlTnVtYmVyID0gMDtcbiAgICBpZihpbWFnZU51bWJlciA8IDApIGltYWdlTnVtYmVyID0gNDtcbiAgICBmb3IoY29uc3QgZWxlbSBpbiBpbWFnZXMpIGltYWdlc1tlbGVtXS5jbGFzc0xpc3QucmVtb3ZlKFwiaW1hZ2Utc2hvd1wiKTtcbiAgICBpbWFnZXNbaW1hZ2VOdW1iZXJdLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1zaG93XCIpO1xuICB9XG5cbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==