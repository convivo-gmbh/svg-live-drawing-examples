import { LiveDrawApplication } from './live-draw-application';

const button1 = document.createElement( 'input' );
button1.type = 'button';
button1.value = 'Draw Rectangle';
document.body.appendChild( button1 );

const button2 = document.createElement( 'input' );
button2.type = 'button';
button2.value = 'Draw Circle';
document.body.appendChild( button2 );

const button3 = document.createElement( 'input' );
button3.type = 'button';
button3.value = 'Draw Polygon';
document.body.appendChild( button3 );

const button4 = document.createElement( 'input' );
button4.type = 'button';
button4.value = 'Toggle Grid';
document.body.appendChild( button4 );

const container = document.createElement( 'div' );
document.body.appendChild( container );
const app = new LiveDrawApplication( container );

button1.addEventListener( 'click', () => {
  app.activateTool( 'rectangleControl' );
}, false );

button2.addEventListener( 'click', () => {
  app.activateTool( 'circleControl' );
}, false );

button3.addEventListener( 'click', () => {
  app.activateTool( 'polygonControl' );
}, false );

button4.addEventListener( 'click', () => {
  app.toggleGrid();
}, false );

