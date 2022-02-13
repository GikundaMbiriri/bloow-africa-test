import React from 'react'
import Banner from '../../components/banner/Banner'
import Card from '../../components/cards/Card'

function home(props) {
  //const {loading}=props.data;
  return (
    <>
    <div className="flex flex-row flex-wrap w-screen justify-between overflow-x-hidden">
       <Banner/>
<Card/>

    </div>
    </>
  )
}




export default home;