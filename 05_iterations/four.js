const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    py: 'Python'

}


// Forin loop 
for (const key in myObject) {
    //console.log(`${key} is shortcut for ${myObject[key]}`);
    
}


const programming =["js", "py", "cpp", "rb", "java"]
for (const key in programming) {
   //console.log(`${key} numbering ${programming[key]}`);
    
}




// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


 //console.log(map);

for (const key in map) {
    //console.log(key);
    
}