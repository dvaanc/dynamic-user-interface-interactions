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
  
  dropDownContainer.addEventListener("mouseout", (e) => {
    if (e.target === dropDownContainer) removeDropDown();
  })

  const enableDropDown = function() {
    dropDownContainer.classList.add("show");
  }

  const removeDropDown = function() {
    dropDownContainer.classList.remove("show");
  }

  const renderDropDownContent = function(content) {
    const gamingContent = `
      <div class="child">
      <ul class="apparel">
        <li>T-shirts</li>
        <li>Hats</li>
      </ul>
      <ul class="gaming-accessories">
        <li>Digital Eyewear</li>
        <li>Flight Simulation</li>
        <li>Gamepads & Controllers</li>
        <li>Joysticks</li>
        <li>Steering Wheels</li>
        <li>Streaming Gear</li>
        <li>Video Capture</li>
      </ul>
      <ul class="gaming-furniture">
        <li>Floor Mats</li>
        <li>Gaming Chairs</li>
        <li>Gaming Desks</li>
      </ul>
      <ul class="virtual-reality">
        <li>Headsets</li>
        <li>Accessories</li>
      </ul>
    </div>
  `;
  switch (content) {
    case "gaming":
      dropDownContainer.innerHTML = gamingContent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVyIsInNvdXJjZXMiOlsid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFwcCA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZCYXJcIik7XG4gIGNvbnN0IGRyb3BEb3duQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcm9wLWRvd24tY29udGFpbmVyXCIpXG4gIGNvbnN0IGdhbWluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtaW5nXCIpO1xuICBjb25zdCBub3RlYm9va3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVib29rc1wiKTtcbiAgY29uc3QgY29tcG9uZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcG9uZW50c1wiKTtcblxuICBuYXZCYXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZ2FtaW5nKSB7XG4gICAgICByZW5kZXJEcm9wRG93bkNvbnRlbnQoXCJnYW1pbmdcIilcbiAgICAgIGVuYWJsZURyb3BEb3duKCk7XG4gICAgfVxuICB9KVxuICBcbiAgZHJvcERvd25Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBkcm9wRG93bkNvbnRhaW5lcikgcmVtb3ZlRHJvcERvd24oKTtcbiAgfSlcblxuICBjb25zdCBlbmFibGVEcm9wRG93biA9IGZ1bmN0aW9uKCkge1xuICAgIGRyb3BEb3duQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlRHJvcERvd24gPSBmdW5jdGlvbigpIHtcbiAgICBkcm9wRG93bkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgfVxuXG4gIGNvbnN0IHJlbmRlckRyb3BEb3duQ29udGVudCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICBjb25zdCBnYW1pbmdDb250ZW50ID0gYFxuICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICA8dWwgY2xhc3M9XCJhcHBhcmVsXCI+XG4gICAgICAgIDxsaT5ULXNoaXJ0czwvbGk+XG4gICAgICAgIDxsaT5IYXRzPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8dWwgY2xhc3M9XCJnYW1pbmctYWNjZXNzb3JpZXNcIj5cbiAgICAgICAgPGxpPkRpZ2l0YWwgRXlld2VhcjwvbGk+XG4gICAgICAgIDxsaT5GbGlnaHQgU2ltdWxhdGlvbjwvbGk+XG4gICAgICAgIDxsaT5HYW1lcGFkcyAmIENvbnRyb2xsZXJzPC9saT5cbiAgICAgICAgPGxpPkpveXN0aWNrczwvbGk+XG4gICAgICAgIDxsaT5TdGVlcmluZyBXaGVlbHM8L2xpPlxuICAgICAgICA8bGk+U3RyZWFtaW5nIEdlYXI8L2xpPlxuICAgICAgICA8bGk+VmlkZW8gQ2FwdHVyZTwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHVsIGNsYXNzPVwiZ2FtaW5nLWZ1cm5pdHVyZVwiPlxuICAgICAgICA8bGk+Rmxvb3IgTWF0czwvbGk+XG4gICAgICAgIDxsaT5HYW1pbmcgQ2hhaXJzPC9saT5cbiAgICAgICAgPGxpPkdhbWluZyBEZXNrczwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHVsIGNsYXNzPVwidmlydHVhbC1yZWFsaXR5XCI+XG4gICAgICAgIDxsaT5IZWFkc2V0czwvbGk+XG4gICAgICAgIDxsaT5BY2Nlc3NvcmllczwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICBgO1xuICBzd2l0Y2ggKGNvbnRlbnQpIHtcbiAgICBjYXNlIFwiZ2FtaW5nXCI6XG4gICAgICBkcm9wRG93bkNvbnRhaW5lci5pbm5lckhUTUwgPSBnYW1pbmdDb250ZW50O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICB9XG59KSgpO1xuXG4vKiAgXG4gIDxkaXYgY2xhc3M9XCJub3RlYm9va3NcIj5cbiAgICA8dWwgY2xhc3M9XCJzdWItY2F0ZWdvcnlcIj5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgPC91bD5cbiAgICA8dWwgY2xhc3M9XCJpLW5lZWQtYS1kZWljZVwiPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgPC91bD5cbiAgICA8dWwgY2xhc3M9XCJzaG9wLWJ5LXNjcmVlbi1zaXplXCI+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgPC91bD5cbiAgICA8dWwgY2xhc3M9XCJzaG9wLWJ5LWJyYW5kXCI+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbXBvbmVudHNcIj5cbiAgICA8dWwgY2xhc3M9XCJjcHVcIj5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgPC91bD5cbiAgICA8dWwgY2xhc3M9XCJncmFwaGljcy1jYXJkc1wiPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICA8L3VsPlxuICAgIDx1bCBjbGFzcz1cImhhcmREcml2ZXMtYW5kLVNTRHNcIj5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgICAgPGxpPjwvbGk+XG4gICAgICA8bGk+PC9saT5cbiAgICAgIDxsaT48L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PiAqLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==