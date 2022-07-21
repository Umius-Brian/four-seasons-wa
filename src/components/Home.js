import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <img src="background.png"/>
      <Link to='/NPS'>
        <Button
          size='lg'
          style={{ position: 'absolute', top: '125px', right: '200px' }}
          variant='dark'
          className='button'
        >
          NPS Score
        </Button>
      </Link>
    </div>
  )
}

export default Home