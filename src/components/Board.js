import Square from "./Square";

const Board = (props) => {
  return(
    <div className="board">
      {/* row loop */}
      {[...Array(5).keys()].map(i => {
      return (<div key={i} className='board-row'>
          {/* square loop */}
          {[...Array(5).keys()].map(j => {
            const k = j + i * 5;
            return(
              <Square 
                value={props.squares[k]}
                onClick={() => props.onClick(k)}
                center={(k === 12) ? true : false}
              />
            )
          })}
        </div>)
      })}
    </div>
  )
}

export default Board;