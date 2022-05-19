import clsx from 'clsx';

const Square = (props) => {
  return(
    <button
      className={clsx('square', props.value.stamped && 'stamped', props.value.win && 'win')}
      style={{ pointerEvents: props.center && 'none'}}
      onClick={props.onClick}
    >
      {props.value.text}
    </button>
  )
}

export default Square;