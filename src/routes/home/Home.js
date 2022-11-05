import React , {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const locations = [
    {
        name:"Amanora City",
        day:"Every Sunday",
        address:"https://goo.gl/maps/HHMD4DHv7RgUXGj8A",
        time:"3pm-9pm"
    },
    {
        name:"Prabhat Road",
        day:"Sunday",
        address:"https://goo.gl/maps/EiFVVggbQTiTm1n2A",
        time:"7am-1pm"
    },
    {
        name:"Wanwadi",
        day:"Saturday",
        address:"https://maps.app.goo.gl/54qsT1zcGPEv6gMx7",
        time:"3pm-9pm"
    },
    {
        name:"Karvenagar",
        day:"Saturday",
        address:"https://goo.gl/maps/y1LnJPhQwMaqrPTF8",
        time:"3pm-9pm"
    },
    {
        name:"Hinjewadi",
        day:"Saturday",
        address:"https://goo.gl/maps/y1LnJPhQwMaqrPTF8",
        time:"3pm-9pm"
    },
    {
        name:"Kharadi",
        day:"Saturday",
        address:"https://goo.gl/maps/y1LnJPhQwMaqrPTF8",
        time:"3pm-9pm"
    },
    {
        name:"Brahmasun City",
        day:"Saturday",
        address:"https://goo.gl/maps/y1LnJPhQwMaqrPTF8",
        time:"3pm-9pm"
    },
    {
        name:"Hadapsar",
        day:"Saturday",
        address:"https://goo.gl/maps/y1LnJPhQwMaqrPTF8",
        time:"3pm-9pm"
    }
]

const Home = () => {

    useEffect(() => {
        AOS.init({
          once:true
        });
      }, [])


  return (
    <>
      <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
        
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="title-font text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    <span>Revolutionizing the stall </span><br/>
                    <span>Booking for direct sell</span>
                </h1>
                    <div data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" class="flex items-center justify-center">
                        <button class="text-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Book Stall
                        </button>
                    </div>
                </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="./images/centerimage.jpg"/>
                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">About Us</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We at Wingrow Agritech facilitate direct interaction between consumers and farmers. Consumers get access to produce direct from farms which is much fresher and lasts longer, at reasonable prices.</p>
                    </div>
                    <div class="flex flex-wrap -m-4 text-center">
                        <img data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="xl:w-1/3 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="./images/28.png"/>
                        <img data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" class="xl:w-1/3 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="./images/29.png"/>
                        <img data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" class="xl:w-1/3 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="./images/30.png"/>
                    </div>
                </div>
                </section>


            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Markets</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>

                    <div class="flex flex-wrap -m-2">
                        {
                            locations.map((e , i)=>{
                                return(
                                    <div key={i} class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./images/slidestall2.jpeg"/>
                                        <div class="flex-grow">
                                            <a href={e.address}><h2 class="text-gray-900 title-font font-medium">{e.name}</h2></a>
                                            <p class="text-gray-500">{e.day} at {e.time}</p>
                                        </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                            </div>
                        </div>
                </section>
      </div>
  </>
  )
}

export default Home