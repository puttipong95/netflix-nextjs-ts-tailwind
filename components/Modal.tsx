import React, { useEffect, useState } from 'react'
import MuiModal from '@mui/material/Modal'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import { XIcon } from '@heroicons/react/outline'

function Modal() {
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [movie, setMovie] = useRecoilState(movieState)
    const [data, setData] = useState(null)

    useEffect(() => {
      if(!movie) return

      async function fetchMovie() {
        const data = await fetch(
          `https://api.themoviedb.org/3/${
            movie?.media_type === 'tv' ? 'tv' : 'movie'
          }/${movie?.id}?api_key=${
            process.env.NEXT_PUBLIC_API_KEY
          }&language=en-US&append_to_response=videos`
        ).then((response) => response.json())
        .catch(err => console.log(err.message))
        
        setData(data)
      }

      fetchMovie()
    }, [movie])

    console.log(data);

    const handleClose = () => {
        setShowModal(false)
    }

  return (
    <MuiModal open={showModal} onClose={handleClose}>
        <>
            <button 
              className='modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818 hover:bg-[#181818]'
              onClick={handleClose} 
            >
              <XIcon className='h-6 w-6' />
            </button>

            <div>

            </div>
        </>
    </MuiModal>
  )
}

export default Modal