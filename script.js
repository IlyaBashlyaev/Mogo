function getHeight() {
    var examples = document.querySelector('.examples')
    var height = window.innerWidth / 5

    if (height <= 390)
        examples.style.gridTemplateRows = `repeat(2, ${height}px)`

    else
        examples.style.gridTemplateRows = `repeat(2, 390px)`
    
    const quotes = document.querySelectorAll('.quote')
    quotes.forEach(quote => {
        var quoteContent = quote.querySelector('.quote__content')
        var textHeight = quoteContent.querySelector('.quote__text').offsetHeight
        var authorHeight = quoteContent.querySelector('.quote__author').offsetHeight
        var height = textHeight + 10 + authorHeight

        if (height >= 290) {
            quoteContent.style.justifyContent = 'flex-start'
            quote.style.height = height + 'px'
        }
        
        else {
            quoteContent.style.justifyContent = 'center'
            quote.style = ''
        }
    })
}
getHeight()

window.addEventListener('resize', () => {
    getHeight()
})