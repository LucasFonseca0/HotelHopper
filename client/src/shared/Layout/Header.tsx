import styles from '@/src/utils/style'



const Header = () => {
  return (
    <header className='w-full  bg-primary '>
     
        <div className="w-[90%] h-[80px] m-auto flex items-center justify-between" >
            <h1 className={`${styles.logo}`}>
                HotelHopper
            </h1>
            
        </div>
        
    </header>
  )
}

export default Header
