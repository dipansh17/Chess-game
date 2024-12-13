import { Color, PieceSymbol, Square, Chess } from "chess.js";
import { useState } from "react";
import { MOVE } from "../../../backend-1/src/messages";

const ChessBoard = ({
  chess,
  board,
  socket,
  setBoard,
}: {
  chess: Chess;
  setBoard: React.Dispatch<
    React.SetStateAction<
      ({
        square: Square;
        type: PieceSymbol;
        color: Color;
      } | null)[][]
    >
  >;
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
  socket: WebSocket;
}) => {
  const [from, setFrom] = useState<null | Square>(null);

  return (
    <div className="text-black">
      {board.map((row, i) => (
        <div key={i} className="flex">
          {row.map((square, j) => {
            const squareRepresentation = String.fromCharCode(97 + (j % 8)) + (8 - i) as Square;
            const isSelected = from === squareRepresentation;

            return (
              <div
                key={j}
                className={`w-16 h-16 ${
                  (i + j) % 2 === 0 ? "bg-green-500" : "bg-white"
                } ${isSelected ? "border-4 border-yellow-500" : ""}`}
                onClick={() => {
                  if (!from) {
                    setFrom(squareRepresentation);
                  } else {
                    const move = chess.move({
                      from,
                      to: squareRepresentation,
                    });

                    if (move) {
                      // Update board if the move is valid
                      socket.send(
                        JSON.stringify({
                          type: MOVE,
                          payload: {
                            move: {
                              from,
                              to: squareRepresentation,
                            },
                          },
                        })
                      );
                      setBoard(chess.board());
                    }
                    setFrom(null); // Reset the selection
                  }
                }}
              >
                <div className="w-full justify-center flex">
                  <div className="h-full justify-center flex flex-col">
                    {square ? (
                      <img
                        className="w-4"
                        src={`/${
                          square.color === "b" ? square.type : `${square.type.toUpperCase()}`
                        }.png`}
                        alt={`${square.type}`}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
      <div>ChessBoard</div>
    </div>
  );
};

export default ChessBoard;
