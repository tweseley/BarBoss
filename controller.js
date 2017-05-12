var CONTROLLER = (function(document) {

  var searchTermInput;
  var resultsList;
  var autocompleteListener;

  function registerAutocompleteListener(listener) {
    autocompleteListener = listener;
  }

  function appendToSearchResults(value) {
    resultsList.appendChild(createListElement(value, onResultClick));
  }

  function clearSearchResults() {
    resultsList.innerHTML = '';
  }

  function createListElement(value, onClick) {
    var li = document.createElement('li');
    li.innerHTML = value;
    li.addEventListener('click', onClick, false);
    return li;
  }

  function onResultClick(event) {
    searchTermInput.value = event.target.innerHTML;
    clearSearchResults();
  }

  function onKeyUp() {
    clearSearchResults();
    var searchTerm = searchTermInput.value
    if (searchTerm.length > 0 && autocompleteListener != undefined) {
      autocompleteListener(searchTerm);
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    searchTermInput = document.getElementById('search-term-input');
    resultsList = document.getElementById('results-list');
    searchTermInput.addEventListener('keyup', onKeyUp, false);
  });

  return {
    "registerAutocompleteListener" : registerAutocompleteListener,
    "clearSearchResults" : clearSearchResults,
    "appendToSearchResults" : appendToSearchResults
  };

})(document);
