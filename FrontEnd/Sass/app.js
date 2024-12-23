  document.querySelectorAll(".contentsection").forEach((element) => {
  const index = element.id.charAt(element.id.length - 1) - 1;
  const content = document.querySelectorAll(".content").item(index);
  const mainContent = document.querySelector(".maincontent");
  const contentHeader = document.querySelectorAll(".contentheader").item(index);
  const contentoo = document.querySelectorAll(".hiddencontentwrapper").item(index);
  element.addEventListener("click", function (event) {
  event.stopPropagation()
  document.querySelectorAll(".contentsection").forEach((gidegidegidagedago) => {if (gidegidegidagedago !== element){gidegidegidagedago.classList.add("hidden");}});
  if (mainContent) {mainContent.classList.add("expanded")};      // Focus on .maincontent if it exists
  if (contentHeader) {contentHeader.classList.add("hidden")}; // Focus on .contentheader if it exists
  if (content) {content.classList.add("hidden")};            // Focus on .contentheader if it exists
  if (contentoo) {contentoo.classList.add("expanded")};       // Focus on .content if it exists
  console.log("finnaexpand")
  element.classList.add("expanded");});
  element.addEventListener("mouseleave", function() {
  console.log("finnaexpand2")
  document.querySelectorAll(".expanded").forEach((element) => {element.classList.remove("expanded")});
  document.querySelectorAll(".hidden").forEach((element) => {element.classList.remove("hidden")})});});
document.body.addEventListener("mousemove", (e) => {
let rect = document.body.getBoundingClientRect(); 
let x = e.clientX - rect.left; let y = e.clientY - rect.top;
document.body.style.setProperty("--x", x + "px"); 
document.body.style.setProperty("--y", y + "px"); });
document.querySelectorAll(".contentsection").forEach((element) => { element.addEventListener("mousemove", (e) => { let rect = element.getBoundingClientRect(); let x = e.clientX - rect.left; let y = e.clientY - rect.top; element.style.setProperty("--x", x + "px"); element.style.setProperty("--y", y + "px"); }); });
