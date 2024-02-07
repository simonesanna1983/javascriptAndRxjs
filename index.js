import './style.css';
import { fromEvent } from './lib/rxjs.min.js'; //comment this line if you are using the cdn

// const { fromEvent } = rxjs;  //uncomment this line if you are using the cdn

/*rxjs way*/
const el = document.querySelector('input');

fromEvent(el, 'input')
  // define the event type
  .subscribe((e) => {
    console.log(e.currentTarget.value);
  });

/*  

native javascript way:

document.querySelector('input').addEventListener('input', (e) => {


  console.log(e.currentTarget.value);

});

 */
