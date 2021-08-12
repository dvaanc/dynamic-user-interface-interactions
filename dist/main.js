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
    if (e.target === gaming) {
      renderDropDownContent("gaming")
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
    <div class="gamingDropDown">
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
  </div>
  `;
  const notebookContent = ``;
  const componentsContent = ``;
  switch (content) {
    case "gaming":
      dropDownContainer.innerHTML = gamingContent;
      break;
    case "notebook":
      break;
    case "components":
      break;
  } 
  }
})();

/*  
  <div class="notebooks">
    <ul class="sub-category">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="i-need-a-deice">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="shop-by-screen-size">
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="shop-by-brand">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div class="components">
    <ul class="cpu">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="graphics-cards">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="hardDrives-and-SSDs">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div> */
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXBwID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdkJhclwiKTtcbiAgY29uc3QgZHJvcERvd25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3AtZG93bi1jb250YWluZXJcIilcbiAgY29uc3QgZ2FtaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1pbmdcIik7XG4gIGNvbnN0IG5vdGVib29rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZWJvb2tzXCIpO1xuICBjb25zdCBjb21wb25lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wb25lbnRzXCIpO1xuXG4gIG5hdkJhci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBnYW1pbmcpIHtcbiAgICAgIHJlbmRlckRyb3BEb3duQ29udGVudChcImdhbWluZ1wiKVxuICAgICAgZW5hYmxlRHJvcERvd24oKTtcbiAgICB9XG4gIH0pXG4gIFxuICBkcm9wRG93bkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xuICAgIHJlbW92ZURyb3BEb3duKCk7XG4gIH0pXG5cbiAgY29uc3QgZW5hYmxlRHJvcERvd24gPSBmdW5jdGlvbigpIHtcbiAgICBkcm9wRG93bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZURyb3BEb3duID0gZnVuY3Rpb24oKSB7XG4gICAgZHJvcERvd25Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gIH1cblxuICBjb25zdCByZW5kZXJEcm9wRG93bkNvbnRlbnQgPSBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgY29uc3QgZ2FtaW5nQ29udGVudCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiZ2FtaW5nRHJvcERvd25cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgIDxoND5BcHBhcmVsPC9oND5cbiAgICAgIDx1bCBjbGFzcz1cImFwcGFyZWxcIj5cbiAgICAgICAgPGxpPlQtc2hpcnRzPC9saT5cbiAgICAgICAgPGxpPkhhdHM8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgIDxoND5HYW1pbmcgQWNjZXNzb3JpZXM8L2g0PlxuICAgICAgPHVsIGNsYXNzPVwiZ2FtaW5nLWFjY2Vzc29yaWVzXCI+XG4gICAgICAgIDxsaT5EaWdpdGFsIEV5ZXdlYXI8L2xpPlxuICAgICAgICA8bGk+RmxpZ2h0IFNpbXVsYXRpb248L2xpPlxuICAgICAgICA8bGk+R2FtZXBhZHMgJiBDb250cm9sbGVyczwvbGk+XG4gICAgICAgIDxsaT5Kb3lzdGlja3M8L2xpPlxuICAgICAgICA8bGk+U3RlZXJpbmcgV2hlZWxzPC9saT5cbiAgICAgICAgPGxpPlN0cmVhbWluZyBHZWFyPC9saT5cbiAgICAgICAgPGxpPlZpZGVvIENhcHR1cmU8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgIDxoND5HYW1pbmcgRnVybml0dXJlPC9oND5cbiAgICAgIDx1bCBjbGFzcz1cImdhbWluZy1mdXJuaXR1cmVcIj5cbiAgICAgICAgPGxpPkZsb29yIE1hdHM8L2xpPlxuICAgICAgICA8bGk+R2FtaW5nIENoYWlyczwvbGk+XG4gICAgICAgIDxsaT5HYW1pbmcgRGVza3M8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgIDxoND5WaXJ0dWFsIFJlYWxpdHk8L2g0PlxuICAgICAgPHVsIGNsYXNzPVwidmlydHVhbC1yZWFsaXR5XCI+XG4gICAgICAgIDxsaT5IZWFkc2V0czwvbGk+XG4gICAgICAgIDxsaT5BY2Nlc3NvcmllczwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYDtcbiAgY29uc3Qgbm90ZWJvb2tDb250ZW50ID0gYGA7XG4gIGNvbnN0IGNvbXBvbmVudHNDb250ZW50ID0gYGA7XG4gIHN3aXRjaCAoY29udGVudCkge1xuICAgIGNhc2UgXCJnYW1pbmdcIjpcbiAgICAgIGRyb3BEb3duQ29udGFpbmVyLmlubmVySFRNTCA9IGdhbWluZ0NvbnRlbnQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibm90ZWJvb2tcIjpcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjb21wb25lbnRzXCI6XG4gICAgICBicmVhaztcbiAgfSBcbiAgfVxufSkoKTtcblxuLyogIFxuICA8ZGl2IGNsYXNzPVwibm90ZWJvb2tzXCI+XG4gICAgPHVsIGNsYXNzPVwic3ViLWNhdGVnb3J5XCI+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgIDwvdWw+XG4gICAgPHVsIGNsYXNzPVwiaS1uZWVkLWEtZGVpY2VcIj5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgIDwvdWw+XG4gICAgPHVsIGNsYXNzPVwic2hvcC1ieS1zY3JlZW4tc2l6ZVwiPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgIDwvdWw+XG4gICAgPHVsIGNsYXNzPVwic2hvcC1ieS1icmFuZFwiPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb21wb25lbnRzXCI+XG4gICAgPHVsIGNsYXNzPVwiY3B1XCI+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgIDwvdWw+XG4gICAgPHVsIGNsYXNzPVwiZ3JhcGhpY3MtY2FyZHNcIj5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgPC91bD5cbiAgICA8dWwgY2xhc3M9XCJoYXJkRHJpdmVzLWFuZC1TU0RzXCI+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj4gKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=