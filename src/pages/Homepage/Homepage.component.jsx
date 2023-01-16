import React from 'react'
import CallControls from '../../components/CallControls/CallControls.component'
import CallDetails from '../../components/CallDetails/CallDetails.component'
import Heading from '../../components/Heading/Heading.components'
import { HomepageContainer } from './Homepage.styles'

const Homepage = () => {
  return (
    <HomepageContainer>
      <Heading/>
      <CallDetails/>
      <CallControls/>
    </HomepageContainer>
  )
}

export default Homepage