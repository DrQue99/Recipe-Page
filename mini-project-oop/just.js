const createTag = function(...text) {
    return `<${name}>\n${text}\n</${name}>`
 }
 
 console.log(createTag('p', 'My paragraph.'))
 console.log(createTag('div'));