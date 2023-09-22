import React from 'react'
import "./skill.css"
import food from "../../assets/food.png"
import quizz from "../../assets/quiz.png"
import weather from "../../assets/weather.png"
import eve from "../../assets/eve.png"
import hospital from "../../assets/hospital.png"
import vote from "../../assets/vote.png"
import joke  from "../../assets/jokes.png"
import quote from "../../assets/quotes.png"
import regis from "../../assets/regis.png"
import porfoloi from "../../assets/portfolio.png"
import animation from "../../assets/animation.png"
import ritika from "../../assets/ritika.png"



const Skill = () => {
  return (
    <section id="skill">
        <span className='skilltitle'>
          Projects
          </span>
          <span className='skillD'>
          Some of my recent Projects
        </span>
        <div className='skillB'>
          <img src={food} alt='food ' className='proImg'/>
          <div className='text'>
          <h1>Recipe Radar</h1>
            <p>A Recipe app is developed using Reactjs and real time API . Which helps find detailed recipe by ingredients,explore different variety of recipe.Share your favorites and enjoy meal time </p>
          </div>
          <div className='btns'>
          <button className='view' >View</button>
          <button className='source'>Source</button>

          </div>
        </div>
        <div className='skillB'>
          <img src={quizz} alt=' quizz' className='proImg'/>
          <div className='text'>
          <h1>Quizzer Zest</h1>
            <p>QuizzerZest is an interactive quiz application built with React.js. Users can create and take quizzes on various topics. The app offers a user-friendly interface to create, edit, and delete quiz questions, and it provides real-time feedback to users upon completing each quiz. Additionally, it includes a leaderboard to display high scores and achievements, making learning fun and competitive.</p>
          </div>
          <div className='btns'>
          <button className='view' >View</button>
          <button className='source'>Source</button>

          </div>
          
        </div>
        <div className='skillB'>
          <img src={vote} alt=' vote' className='proImg'/>
          <div className='text'>
          <h1>Online Voting System</h1>
            <p>Online Voting System (OVS) is an online voting website. In this system people who have 
citizenship of India and whose age is above 18 years of age and any gender can give his/her vote 
online without going to any physical polling booth..</p>
          </div>
          <div className='btns'>
          <button className='view' >View</button>
          <button className='source'>Source</button>

          </div>
          
        </div>
        <div className='skillB'>
          <img src={hospital} alt=' hospital' className='proImg'/>
          <div className='text'>
          <h1>Doc Care</h1>
            <p>Doc Care is aplatform for hospital for storing patient details for future use whenever required .It  stores patients reports in online mode. The patient first visit’s the hospital for seeking treatment he /she will be registered on Doc care by hospital authority by entering their name, phone number, alternative phone number, gender, date of birth, address and adhar card number. The adhar card number is the unique id of the particular patient. Hence after treatment all their reports will be stored in doc care by hospital using their adhar card number. Then each time patient visits any desired hospital just by searching for the unique id known as adhar number all reports can be accessed . The doc care helps hospital also to manage doctors and assign particular doctor to particular patients. So that it helps reduces load of adding each report of patient all at the same. The work of adding reports is distributed among doctors who handles the particular patient.
.</p>
          </div>
          <div className='btns'>
          <button className='view' >View</button>
          <button className='source'>Source</button>

          </div>
          
        </div>
        <div className='skillB'>
          <img src={eve} alt='eve' className='proImg'/>
          <div className='text'>
          <h1>Event Plaza</h1>
            <p>EventPlaza is a comprehensive event management application developed with React.js. It facilitates event organizers to create and manage events seamlessly. Users can browse through a list of upcoming events, view event details, buy tickets, and receive QR codes for easy check-ins at the event venue. Additionally, the app offers features for event hosts to manage attendee lists, track ticket sales, and send out event updates.</p>
          </div>
          <div className='btns'>
          <button className='view' >View</button>
          <button className='source'>Source</button>

          </div>
          
        </div>
        <div className='skillB'>
          <img src={joke} alt=' joke' className='proImg'/>
          <div className='text'>
          <h1>Jokes Wave API</h1>
            <p>JokeWave API is a fun API that serves a collection of jokes, riddles, and humorous one-liners. It allows developers to retrieve random jokes or search for jokes based on specific categories. This API can be incorporated into entertainment apps, chatbots, or websites to provide users with a good laugh and lighten the mood.</p>
          </div>
          <div className='btns'>
          <button className='view' >View</button>
          <button className='source'>Source</button>
          </div>

          </div>
          <div className='skillB'>
          <img src={quote} alt=' quote' className='proImg'/>
          <div className='text'>
          <h1>QuoteMuse API</h1>
            <p>QuoteMuse API is a simple API that offers an extensive assortment of motivational and inspirational quotes. It provides developers with the ability to access quotes from famous personalities, books, and movies. This API can be used in personal development apps, daily quote widgets, or social media platforms to inspire users and spread positivity.</p>
          </div>
          <div className='btns'>
          <button className='view' >View</button>
          <button className='source'>Source</button>

          </div>
          </div>
          
          <div className='skillB'>
          <img src={regis} alt='regis' className='proImg'/>
          <div className='text'>
          <h1>Registration Form</h1>
            <p>A Registration form is a simple Registration page developed using Reactjs to add name email and password.</p>
          </div>
          <div className='btns'>
          <button className='view' >View</button>
          <button className='source'>Source</button>

          </div>
          </div>
          
          <div className='skillB'>
          <img src={porfoloi} alt=' porfoloi' className='proImg'/>
          <div className='text'>
          <h1>Portfolio</h1>
            <p>Portfolio is an application built using Reactjs to showcase my projects , resume and alot more information about me. </p>
          </div>
          <div className='btns'>
          <a href="Intro.js">
          <button className='view' >View</button>
         </a>
          <button className='source'>Source</button>

          </div>
          </div>
          
          <div className='skillB'>
          <img src={animation} alt=' animation' className='proImg'/>
          <div className='text'>
          <h1>Water Animation</h1>
            <p>Water Animation is an simple application built using HTML  to show  water animation on webpage using CSS.</p>
          </div>
          <div className='btns'>
          <button className='view' >View</button>
          <button className='source'>Source</button>

          </div>
          </div>
          <div className='skillB'>
          <img src={ritika} alt=' ritika' className='proImg'/>
          <div className='text'>
          <h1>Ritika</h1>
            <p>Ritika is an simple application built using HTML  to show water animation using CSS and JavaScript to load animation on button click .</p>
          </div>
          <div className='btns'>
          <button className='view' >View</button>
          <button className='source'>Source</button>

          </div>
          </div>
          
          <div className='skillB'>
          <img src={weather} alt=' weather' className='proImg'/>
          <div className='text'>
          <h1>Weather App</h1>
            <p>WeatherZen API is a lightweight API that delivers real-time weather data based on location. It fetches weather information such as temperature, humidity, wind speed, and conditions for a given city or coordinates. Developers can utilize this API to add weather functionality to their applications, like weather forecasts, weather-based recommendations, or simply displaying the current weather at a user's location.</p>
          </div>
          <div className='btns'>
            <a href="//github.com/ritu2425/Weather-App"><button  type="submit" value="" className='view' >View</button></a>
          
          <button className='source'>Source</button>

          </div>

          

        </div>
        </section>

  )
}

export default Skill