// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}


export function getParams(param) {
  const queryString = window.location.search; // Get the query string from the URL
  const urlParams = new URLSearchParams(queryString); // Create a URLSearchParams object
  const value = urlParams.get(param); // Retrieve the parameter value
  return value; // Return the parameter value
}


// function to render the list using a template function and a parent element
export function renderWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
  //This will clear the parent element's content if the clear flag is true
  if (clear) {
    parentElement.innerHTML = "";
  }
  if (templateFn) {
    templateFn(list);
  }

  // Generate HTML strings using the provided template function
  const htmlStrings = list.map(templateFn);

  // Insert the generated HTML into the parent element at the specified position
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}
export function loadHeaderFooter() {
  const header = document.getElementById("main-header");
  const footer = document.getElementById("main-footer");
  
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}