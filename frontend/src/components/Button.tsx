

export const Button = ({onClick, children}:{onClick:()=>void, children :React.ReactNode}) => {
  return (
  <div className="mt-8 flex justify-center mt-4">
    <button onClick={onClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg">{children}</button>
</div>
  )
}
