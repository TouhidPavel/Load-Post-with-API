let showPost = document.getElementById('showPost')
let loadPost = document.getElementById('loadPost')
let statusMsg = document.getElementById('statusMsg')
let currentSerial = 0

loadPost.addEventListener('click', async () => {
    statusMsg.textContent = 'Please Wait...'
    let url = 'https://json-placeholder.mock.beeceptor.com/posts'
    let config = {
        'Content-Type': 'application/json'
    }
    try {
        let response = await axios.get(url, config)
        let posts = response.data
        posts.forEach((item) => {
            currentSerial ++
            showPost.innerHTML += `<tr>
                <td>${currentSerial}</td>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.body}</td>
            </tr>`
        })
        statusMsg.textContent = ''
    }
    catch (error) {
        statusMsg.textContent = 'Failed to Load Data.';
        console.log(error)
    }
})


// Set the current year dynamically in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Disable Right-Click
// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// })