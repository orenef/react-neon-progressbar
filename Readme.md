# react-neon-progressbar

![npm](https://img.shields.io/npm/v/react-neon-progressbar) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-neon-progressbar) ![GitHub top language](https://img.shields.io/github/languages/top/orenef/react-neon-progressbar) ![npm](https://img.shields.io/npm/dt/react-neon-progressbar) ![NPM](https://img.shields.io/npm/l/react-neon-progressbar)

react-neon-progressbar is simple progress component with neon look. Good for cyber ;)

[See Demo at CodeSandbox](https://codesandbox.io/s/react-neon-progressbar-utqsh)
## Installation

Use the package manager [npm](https://www.npmjs.com/package/react-neon-progressbar) to install .

```bash
npm install react-neon-progressbar 
```

## Usage

```jsx
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

```

props| default value| info
--- | --- | ---
width | 300 | The width of the progress bar
Value | 0 | Fill percentage of the progress bar

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)