import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";

const Landing = () => {
    const navigate=useNavigate();
  return (
    <div className="flex justify-center">
        <div className="pt-8 max-w-screen-lg">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex justify-center">
                    <img src={"../../public/chessBoard.jpeg"} className="max-w-96"alt="fdf" />
                </div>
                <div className="pt-16">
                <div className="flex justify-center">
                    <h1 className="text-4xl font-bold text-white">Play Chess Online On Yhe #1 Site</h1>
                    </div>
                    <div className="mt-8 flex justify-center mt-4">
                       <Button onClick={()=>{
                        navigate("/game")
                       }}>Play Online</Button>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Landing