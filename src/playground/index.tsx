import React from 'react';
import ReactDOM from 'react-dom';
import { NeonProgressBar } from '../NeonProgressBar';

let intervalId: any = undefined;
function Demo() {
	const [value, setValue] = React.useState(0);
	React.useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
      if (value < 100) {
        setValue(value + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 80)
    return () => clearInterval(intervalId);
	},[value]);
  return (
	<div style={{ width: '600px', height: '600px' }} className="App">
    <NeonProgressBar value={value} width={300} />
	</div>
  );
}

ReactDOM.render(
  <Demo />,
  document.getElementById('root'),
);
