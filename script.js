let apiUrl = 'https://api.github.com/users/tfavor/repos';

function getRepos() {
    $("form").on('submit', function(event) {
        event.preventDefault();
        action();
    });
}

function displayResults(responseJson) {
    let product = '';
    if (responseJson.message === "Not Found") {
        product = `<h1>User Not Found</h1>`;
    } else {
    for (let i = 0; i < responseJson.length; i++) {
       product += `<a href="${responseJson[i].html_url}">${responseJson[i].name}</a>`;
    }
}
  $('section').html(product);
  console.log(product);
}

function action () {
    let userName = $(".username").val();
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(err => alert("something went wrong. try again later."));
}

$(function search() {
    getRepos();
})