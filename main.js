var add = document.getElementById('add-btn')
var t = document.getElementById('display')

var row = 1
add.onclick = function () {

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const date = document.getElementById('date').value
    
    const img = document.createElement('img')

    if (name != '' && email != '' ) {
        var values = []
        var selected_value = document.querySelectorAll('input[type="checkbox"]:checked')
        Array.from(selected_value).forEach(function (e) {
            values.push(e.value)
        })

        const description = `<p><strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Date:</strong> ${date}<br><strong>Gender:</strong> ${document.querySelector('input[type="radio"]:checked').value}
        <br><strong>Skills:</strong> ${values.join(', ')}</p>
        `
        var newRow = t.insertRow(row)

        var cell1 = newRow.insertCell(0)
        var cell2 = newRow.insertCell(1)

        if (document.querySelector('input[type="radio"]:checked').value == 'Male') {
            img.setAttribute('src', 'https://png.pngtree.com/png-vector/20190327/ourmid/pngtree-black-suit-male-white-collar-professional-figure-image-png-image_875728.jpg')
            img.setAttribute('alt', 'Male')
        }
        else {
            img.setAttribute('src', 'https://thumbs.dreamstime.com/z/young-woman-passport-photo-worker-id-driver-licence-employee-badge-design-element-social-media-avatar-idea-female-character-icon-191134271.jpg')
            img.setAttribute('alt', 'Female')
        }

        cell1.innerHTML = description
        cell2.appendChild(img)

        row++
        document.getElementById('input-form').reset()
        name = email = age = ''
    }
    else {
        alert('Please fill all the fields')
    }
}

document.getElementById('delete-btn').onclick = function () {
    if (row != 1) {
        console.log(row)
        row--
        t.deleteRow(row)
    }
    else
        return
}