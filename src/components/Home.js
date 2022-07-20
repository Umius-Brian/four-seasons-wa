import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <img src="background.png"/>
      <Link to='/NPS'>
        <Button
          size='sm'
          style={{ position: 'absolute', top: '100px', left: '20px' }}
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