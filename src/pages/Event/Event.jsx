import React, { useEffect } from 'react'
import EventContent from '../../Components/Event/EventContent'
import EventSlide from '../../Components/Event/EventSlide'

const Event = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
      <EventSlide />
      <EventContent />
    </div>
  )
}

export default Event