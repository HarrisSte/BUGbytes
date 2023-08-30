import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className='footer text-center text-white'>
        <div className='github-icon pb-4'>
          <Link to="https://github.com/HarrisSte/BUGbytes">
            <BsGithub size={30} color="white"/>
          </Link>
        </div>
        <div className='names'>
          Caitlin Ramsey -- John Sanders -- Mohamed Hourri -- Stephanie Harris ||
          &copy; 2023
        </div>
      </div>
    </footer>
  );
}

export default Footer;