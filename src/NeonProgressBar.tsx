import React from 'react'
import './style.css';

interface Props {
  value: number;
  width: number;
}

export const NeonProgressBar: React.FC<Props> = ({
  value = 0,
  width = 300
}) => {
  return (
	<div className="react-neon-bar-wrapper">
	  <progress style={{ width: `${width}px` }} className='react-neon-bar' value={value} max='100'></progress>
	  <span className='react-neon-bar__value'>{value}%</span>
	</div>
	)
}