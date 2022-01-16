const form = document.querySelector('#searchForm')
const list = document.querySelector('div')

const displayMovie = async(userInput) => {
    const results = await axios.get(`http://api.tvmaze.com/search/shows?q=${userInput}`)
    for (let res of results.data) {
        const div = document.createElement('div')
        const image = document.createElement('img')
        try{
            image.src = res.show.image.medium
        } catch(e) {
            image.src = res.show.image.original
        }
        div.append(image)
        div.append(res.show.name)
        list.append(div)
        console.dir(res)
    }
    return results
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const userInput = form.elements.query.value
    displayMovie(userInput)
})
