

let rootPath = "https://mysite.itvarsity.org/api/ContactBook";
let apiKey = checkApi();

function checkApi() {
    if (! localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}