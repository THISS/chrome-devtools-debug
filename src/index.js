import './styles.css'
import {
  sum,
  divide,
  multiply,
  toThePower,
  takeAway,
  squareRoot,
  square,
} from './calculator'

function wrapInHtml(title, toPrint) {
  return `<div>${title}: ${toPrint}</div>`
}

// Write Javascript code!
const appDiv = document.getElementById('app')

const markup = `<main>
${wrapInHtml('sum', sum(1, 2, 3, 4, 5))}
${wrapInHtml('subtract', takeAway(1, 2, 3, 4, 5))}
${wrapInHtml('divide', divide(1, 2, 3, 4, 5))}
${wrapInHtml('multiply', multiply(1, 2, 3, 4, 5))}
${wrapInHtml('square', square(3))}
${wrapInHtml('squareRoot', squareRoot(9))}
${wrapInHtml('toThePower', toThePower(9, 3))}
</main>`

appDiv.innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuratio as Parcel to bundle this sandbox, you can find more
  info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`
