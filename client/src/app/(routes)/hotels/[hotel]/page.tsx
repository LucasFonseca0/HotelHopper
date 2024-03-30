import React from 'react'

const page = ({ params }: { params: { hotel: string } }) => {
  return (
    <div>
        <h1>
            {params.hotel}
        </h1>
    </div>
  )
}

export default page
