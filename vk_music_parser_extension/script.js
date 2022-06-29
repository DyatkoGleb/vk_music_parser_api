window.onload = function() {
    const playlist = document.querySelector('.AudioPlaylistSnippet__list').children
    const output = {}

    for(let i = 0; i < 100; i++) {
        const song = playlist[i].children[0].children[5].children[1]

        output[song.children[0].textContent] = song.children[1].textContent.trim().replace(/\n/g, '').replace(' ', '')
    }

    sendresults(output)
}


const sendresults = async (output) => {
    await fetch('http://localhost:1111', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(output)
    })
}