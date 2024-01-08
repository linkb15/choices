// import './style.css'
import './base-choices.css'
import { checkIntervalDateContainer } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="date-container">test</div>
  </div>
`

checkIntervalDateContainer()
