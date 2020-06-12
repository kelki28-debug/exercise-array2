let tim = ['bill', 'mark', 'steve','gates', 'zuckerberg', 'jobs']
let tim2 = []


tim2.push(tim.slice(3,6))
tim.splice(3,6)
document.write(`<p>${tim2}</p>`)
document.write(`<p>${tim}</p>`)