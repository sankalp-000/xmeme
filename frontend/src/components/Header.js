import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title ,onAdd, showAdd}) => {

    
    return (
        
        <header  className='header '>
            {/* <h1 className='titles'> {title} </h1> */}
            <p className='titles'>"A place to share memes with everyone! "</p>
        </header>
    )
}

Header.defaultProps = {
    title: 'World of memes',
}  

Header.propTypes = {
    title: PropTypes.string.isRequired,
  }
  
export default Header
