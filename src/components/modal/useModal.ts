import { useState } from 'react'

const useModal = (): any => {
  const [isShowing, setIsShowing] = useState(false)

  function toggle (): void {
    setIsShowing(!isShowing)
  }

  return {
    isShowing,
    toggle
  }
}

export default useModal
