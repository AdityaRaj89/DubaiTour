const searchInput = document.querySelector('.bar');
const suggestionList = document.querySelector('#suggestions');

const searchlist = document.querySelectorAll('.subheading, .subheadingx,subheading burjalar');

searchInput.addEventListener('input', function()
{
    const query = searchInput.value.toLowerCase();

suggestionList.innerHTML = '';


const matchingSubheadings = Array.from(searchlist).filter((searchlist) => {
    return searchlist.textContent.toLowerCase().includes(query);
});

matchingSubheadings.forEach((searchlist)=>{
    const listItem = document.createElement('li');
    listItem.textContent = searchlist.textContent;
    suggestionList.appendChild(listItem);

    listItem.addEventListener('click',function(){
        searchlist.scrollIntoView({behavior:'smooth'});
    });
});
});

searchInput.addEventListener('keydown',function(event){
    if(event.key ===            'Enter' && suggestionList.firstChild){
        const firstSuggestion = suggestionList.firstChild;
        firstSuggestion.click();
    }
});