import fs from 'fs'

const examples = {
    "name":"Halil İbrahim",
    "surname":"Tunç",
    "school": "uludag"
}

fs.writeFile('ex.json', '{"name":"ibrahim"}', (err) => {
    if(err) console.log(err)
})

fs.readFile('ex.json', 'utf-8', (err, data) => {
    if (err) console.log(err)
    console.log(data)
})

fs.writeFile('ex.json', '{"name":"ibrahim" , "name":"duygu"}', (err) => {
    if(err) console.log(err)
})

fs.readFile('ex.json', 'utf-8', (err, data) => {
    if (err) console.log(err)
    console.log(data)
})

fs.unlink('ex.json', (err) => {
    if(err) throw(err)
    console.log('ex.json dosyası silindi')
})
