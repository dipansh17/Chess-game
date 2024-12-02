import { Color, PieceSymbol, Square } from "chess.js";

const ChessBoard = ({board}:{
    board:({
        square: Square;
        type: PieceSymbol;
        color: Color ;
    } | null)[][];
}) => {
   return (
    <div>ChessBoard</div>
  )
}

export default ChessBoard