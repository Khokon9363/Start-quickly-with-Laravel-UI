// How many item added by Developer
let items = [
    'php artisan vue --auth',
    'php artisan react --auth',
    'php artisan bootstrap --auth',
    'npm i',
    'npm run dev',
    'npm run watch',
    'npm run prod',
    'npm run production'
]
function defaultItems() {
    item = ''
    for (let i = 0; i < items.length; i++) {
        item += '<li class="list-group-item d-flex justify-content-between align-items-center">'
        item += items[i]
        item += '<button class="btn btn-sm btn-outline-secondary" type="button" onclick="copy(' + i + ')">Copy !</button>'
        item += '</li>'
    }
    document.getElementById("addItems").innerHTML = item
}
// call the default function to show items
defaultItems()

// Copy the text
let copyText = document.getElementById("copyText")
function copy(e) {
    copyText.value = items[e]
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy")
    alert("Copied the text: " + copyText.value)
}