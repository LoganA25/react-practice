export function Thing(props) {
	return <>{props.open ? <div> {props.text} </div> : <div></div>}</>;
}

// props.open ? <div> Show me </div> : <div></div>
// ? === if
// : === else
// if(props.open === true) {
// 	<div>Show me</div>
// }else {
// 	<div></div>
// }
