import { Link } from "react-router-dom";

export const Navbar = () => {
    return <nav className='text-main shadow-lg shadow-main-500/50'>
    <div className='flex justify-between text-center items-center px-24 py-3'>
      <Link to="/" className='text-xl font-bold uppercase'>Genedoc</Link>
      <div className='flex justify-between text-center items-center gap-5'>
        <Link to="#">
          Pricing
        </Link>
        <Link to="#">
          F.A.Q
        </Link>
        <Link className='shadow-lg p-2 px-4 border-2 rounded-lg	' to="#">
          Log In
        </Link>
      </div>
    </div>
  </nav>
}