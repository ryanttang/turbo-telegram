import React from 'react'
import { Spinner, Intent } from '@blueprintjs/core'

const Home = (props) =>
  <div>
    <Spinner intent={Intent.DANGER} size={200} />
  </div>


export default Home;