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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXBwID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdkJhclwiKTtcbiAgY29uc3QgZHJvcERvd25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3AtZG93bi1jb250YWluZXJcIilcbiAgY29uc3QgZ2FtaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1pbmdcIik7XG4gIGNvbnN0IG5vdGVib29rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZWJvb2tzXCIpO1xuICBjb25zdCBjb21wb25lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wb25lbnRzXCIpO1xuXG4gIG5hdkJhci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiB7XG4gICAgaWYoZS50YXJnZXQgPT09IGdhbWluZykge1xuICAgICAgcmVuZGVyRHJvcERvd25Db250ZW50KFwiZ2FtaW5nXCIpO1xuICAgICAgZW5hYmxlRHJvcERvd24oKTtcbiAgICB9XG4gICAgaWYoZS50YXJnZXQgPT09IG5vdGVib29rcykge1xuICAgICAgcmVuZGVyRHJvcERvd25Db250ZW50KFwibm90ZWJvb2tcIik7XG4gICAgICBlbmFibGVEcm9wRG93bigpO1xuICAgIH1cbiAgICBpZihlLnRhcmdldCA9PT0gY29tcG9uZW50cykge1xuICAgICAgcmVuZGVyRHJvcERvd25Db250ZW50KFwiY29tcG9uZW50XCIpO1xuICAgICAgZW5hYmxlRHJvcERvd24oKTtcbiAgICB9XG4gIH0pXG4gIFxuICBkcm9wRG93bkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xuICAgIHJlbW92ZURyb3BEb3duKCk7XG4gIH0pXG5cbiAgY29uc3QgZW5hYmxlRHJvcERvd24gPSBmdW5jdGlvbigpIHtcbiAgICBkcm9wRG93bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZURyb3BEb3duID0gZnVuY3Rpb24oKSB7XG4gICAgZHJvcERvd25Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gIH1cblxuICBjb25zdCByZW5kZXJEcm9wRG93bkNvbnRlbnQgPSBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgY29uc3QgZ2FtaW5nQ29udGVudCA9IGBcbiAgICA8bWFpbiBjbGFzcz1cImdhbWluZ0Ryb3BEb3duXCI+XG4gICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICA8aDQ+QXBwYXJlbDwvaDQ+XG4gICAgICA8dWwgY2xhc3M9XCJhcHBhcmVsXCI+XG4gICAgICAgIDxsaT5ULXNoaXJ0czwvbGk+XG4gICAgICAgIDxsaT5IYXRzPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICA8aDQ+R2FtaW5nIEFjY2Vzc29yaWVzPC9oND5cbiAgICAgIDx1bCBjbGFzcz1cImdhbWluZy1hY2Nlc3Nvcmllc1wiPlxuICAgICAgICA8bGk+RGlnaXRhbCBFeWV3ZWFyPC9saT5cbiAgICAgICAgPGxpPkZsaWdodCBTaW11bGF0aW9uPC9saT5cbiAgICAgICAgPGxpPkdhbWVwYWRzICYgQ29udHJvbGxlcnM8L2xpPlxuICAgICAgICA8bGk+Sm95c3RpY2tzPC9saT5cbiAgICAgICAgPGxpPlN0ZWVyaW5nIFdoZWVsczwvbGk+XG4gICAgICAgIDxsaT5TdHJlYW1pbmcgR2VhcjwvbGk+XG4gICAgICAgIDxsaT5WaWRlbyBDYXB0dXJlPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICA8aDQ+R2FtaW5nIEZ1cm5pdHVyZTwvaDQ+XG4gICAgICA8dWwgY2xhc3M9XCJnYW1pbmctZnVybml0dXJlXCI+XG4gICAgICAgIDxsaT5GbG9vciBNYXRzPC9saT5cbiAgICAgICAgPGxpPkdhbWluZyBDaGFpcnM8L2xpPlxuICAgICAgICA8bGk+R2FtaW5nIERlc2tzPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICA8aDQ+VmlydHVhbCBSZWFsaXR5PC9oND5cbiAgICAgIDx1bCBjbGFzcz1cInZpcnR1YWwtcmVhbGl0eVwiPlxuICAgICAgICA8bGk+SGVhZHNldHM8L2xpPlxuICAgICAgICA8bGk+QWNjZXNzb3JpZXM8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9tYWluPlxuICBgO1xuICBjb25zdCBub3RlYm9va0NvbnRlbnQgPSBgICBcbiAgPG1haW4gY2xhc3M9XCJub3RlYm9va3NcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZDJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtcm93XCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImFycm93XCIgc3JjPVwiaW1hZ2VzL2Fycm93LnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgIDxoND5Ob3RlYm9va3MgJiBUYWJsZXRzPC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LXJvd1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJhcnJvd1wiIHNyYz1cImltYWdlcy9hcnJvdy5wbmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8aDQ+QmFncyAmIEFjY2Vzc29yaWVzPC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LXJvd1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJhcnJvd1wiIHNyYz1cImltYWdlcy9hcnJvdy5wbmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8aDQ+RG9ja2luZyBTdGF0aW9uczwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1yb3dcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiYXJyb3dcIiBzcmM9XCJpbWFnZXMvYXJyb3cucG5nXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPGg0PlBvd2VyIEFkYXB0b3JzPC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LXJvd1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJhcnJvd1wiIHNyYz1cImltYWdlcy9hcnJvdy5wbmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8aDQ+RXh0ZW5kZWQgV2FycmFudHk8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNoaWxkMlwiPlxuICAgICAgICA8aDQ+SSBuZWVkIGEgZGV2aWNlOjwvaDQ+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+Rm9yIEhvbWU8L2xpPlxuICAgICAgICAgIDxsaT5Gb3IgQnVzaW5lc3M8L2xpPlxuICAgICAgICAgIDxsaT5Gb3IgRWR1Y2F0aW9uPC9saT5cbiAgICAgICAgICA8bGk+Rm9yIEdhbWluZzwvbGk+XG4gICAgICAgICAgPGxpPkZvciBDQUQgV29ya3N0YXRpb248L2xpPlxuICAgICAgICAgIDxsaT5UaGF0J3MgVWx0YSBQb3J0YWJsZTwvbGk+XG4gICAgICAgICAgPGxpPlRoYXQgQ29udmVydHMgSW50byBhIFRhYmxlIC0gMiBpbiAxPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGg0PlNob3AgQnkgU2NyZWVuc2l6ZTwvaDQ+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+MTRcIiBhbmQgdW5kZXI8L2xpPlxuICAgICAgICAgIDxsaT5DbGFzc2ljIDE1XCI2PC9saT5cbiAgICAgICAgICA8bGk+MTdcIiBhbmQgdXA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8aDQ+U2hvcCBieSBicmFuZDo8L2g0PlxuICAgICAgICA8aW1nIGNsYXNzPVwiYnJhbmQtaW1hZ2VzXCJzcmM9XCJpbWFnZXMvYXN1cy5wbmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cImJyYW5kLWltYWdlc1wiIHNyYz1cImltYWdlcy9naWdhYnl0ZS5wbmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cImJyYW5kLWltYWdlc1wiIHNyYz1cImltYWdlcy9tc2kucG5nXCIgYWx0PVwiXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJicmFuZC1pbWFnZXNcIiBzcmM9XCJpbWFnZXMvcmF6ZXIucG5nXCIgYWx0PVwiXCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICAgYDtcbiAgICBjb25zdCBjb21wb25lbnRDb250ZW50ID0gYCAgIFxuICAgIDxtYWluIGNsYXNzPVwiY29tcG9uZW50XCI+XG4gICAgPGRpdj5cbiAgICAgIDxoND5DUFVzPC9oND5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPkFNRCBzVFJYNDwvbGk+XG4gICAgICAgIDxsaT5JbnRlbCBMR0ExMjAwPC9saT5cbiAgICAgICAgPGxpPkFNRCBzV1JYODwvbGk+XG4gICAgICAgIDxsaT5BTUQgQU00PC9saT5cbiAgICAgICAgPGxpPkludGVsIExHQTIwNjY8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGg0PkdyYXBoaWNzIENhcmRzPC9oND5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPkFNRCBXb3Jrc3RhdGlvbjwvbGk+XG4gICAgICAgIDxsaT5FeHRlcm5hbCBEaXNwbGF5IEFkYXB0ZXJzPC9saT5cbiAgICAgICAgPGxpPkFNRCBSYWRlb248L2xpPlxuICAgICAgICA8bGk+TnZpZGlhIEdlRm9yY2U8L2xpPlxuICAgICAgICA8bGk+TnZpZGlhIFdvcmtzdGF0aW9uPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxoND5IYXJkIERyaXZlcyAmIFNTRHM8L2g0PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+Mi41XCIgSEREPC9saT5cbiAgICAgICAgPGxpPjMuNVwiIEhERDwvbGk+XG4gICAgICAgIDxsaT4yLjVcIiBTU0Q8L2xpPlxuICAgICAgICA8bGk+TS4yIFNTRDwvbGk+XG4gICAgICAgIDxsaT5OQVMgSGFyZCBEcml2ZXM8L2xpPlxuICAgICAgICA8bGk+UENJIEV4cHJlc3MgU1NEPC9saT5cbiAgICAgICAgPGxpPlN1cnZlaWxsYW5jZSBIREQ8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGg0Pk1lbW9yeSAoUkFNKTwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5EZXNrdG9wIE1lbW9yeTwvbGk+XG4gICAgICAgIDxsaT5Ob3RlYm9vayBNZW1vcnk8L2xpPlxuICAgICAgICA8bGk+U2VydmVyIE1lbW9yeTwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8aDQ+TW90aGVyYm9hcmRzPC9oND5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPkFNRCBTb2NrZXQgc1dSWDg8L2xpPlxuICAgICAgICA8bGk+TW90aGVyYm9hcmQgQWNjZXNzb3JpZXM8L2xpPlxuICAgICAgICA8bGk+QU1EIFNvY2tldCBBTTQ8L2xpPlxuICAgICAgICA8bGk+QU1EIFNvY2tldCBUUlg0PC9saT5cbiAgICAgICAgPGxpPkludGVsIFNvY2tldCAxMTUxLUNMPC9saT5cbiAgICAgICAgPGxpPkludGVsIFNvY2tldCAxMjAwPC9saT5cbiAgICAgICAgPGxpPkludGVsIFNvY2tldCAyMDExLTM8L2xpPlxuICAgICAgICA8bGk+SW50ZWwgU29ja2V0IDIwNjZcbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxoND5PcHRpY2FsIERyaXZlczwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5CbHUtUmF5IERyaXZlPC9saT5cbiAgICAgICAgPGxpPkRWRCBEcml2ZTwvbGk+XG4gICAgICAgIDxsaT5FeHRlcm5hbCAoVVNCKTwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8aDQ+UG93ZXIgU3VwcGxpZXM8L2g0PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+ODBQbHVzIFdoaXRlPC9saT5cbiAgICAgICAgPGxpPjgwUGx1cyBCcm9uemU8L2xpPlxuICAgICAgICA8bGk+ODBQbHVzIEdvbGQ8L2xpPlxuICAgICAgICA8bGk+ODBQbHVzIFBsYXRpbnVtPC9saT5cbiAgICAgICAgPGxpPjgwUGx1cyBUaXRhbml1bTwvbGk+XG4gICAgICAgIDxsaT5VcCB0byA2MDBXPC9saT5cbiAgICAgICAgPGxpPjY1MFctODAwVzwvbGk+XG4gICAgICAgIDxsaT48ODAwVy0xMDAwVy9saT5cbiAgICAgICAgPGxpPjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8aDQ+U291bmQgQ2FyZHM8L2g0PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+RXh0ZXJuYWwgKFVTQik8L2xpPlxuICAgICAgICA8bGk+UENJZTwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L21haW4+XG4gIGA7XG5cbiAgICBzd2l0Y2ggKGNvbnRlbnQpIHtcbiAgICAgIGNhc2UgXCJnYW1pbmdcIjpcbiAgICAgICAgc2V0Q29udGVudChnYW1pbmdDb250ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibm90ZWJvb2tcIjpcbiAgICAgICAgc2V0Q29udGVudChub3RlYm9va0NvbnRlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJjb21wb25lbnRcIjpcbiAgICAgICAgc2V0Q29udGVudChjb21wb25lbnRDb250ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfSBcbiAgfVxuXG4gIGNvbnN0IHNldENvbnRlbnQgPSBmdW5jdGlvbihjb250ZW50VHlwZSkge1xuICAgIGRyb3BEb3duQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGRyb3BEb3duQ29udGFpbmVyLmlubmVySFRNTCA9IGNvbnRlbnRUeXBlXG4gIH1cblxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=