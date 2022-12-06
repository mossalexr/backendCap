import React from 'react'


const About = () => {
  return (
    <div className='bg'>
      <br />
      <br />
      <div className="center">
        <div className='aboutHead'>
          <h1>Cincinnati - the perfect mix between big city and suburban living.</h1>
        </div>
        <br />
        <br />
        <p className='aboutPar att'>Cincinnati is home to a variety of different neighborhoods which allows for rich diversity amongst the community. Over the Rhine and The Banks of Cincinnati are two perfect areas for nightlife! You can get Skyline just about anywhere, so you won't have to worry about that. In Plainville, you can visit Fifty West Brewing Company for some drinks or family fun in the sun! They offer sand vollyball and cornhole, and have a restaurant which serves burgers. Downtown Cincinnati is always a go-to spot. Whether you want to catch a Bengals game at Paycor Stadium or just grab some Goetta at a local diner, just head downtown!</p>
      </div>
      <br />
      
      <div className="flex">
        <div className="card center mx-2" style={{ width: '18rem' }}>
          <div className="card-body sports">
            <h5 className="card-title">Sports</h5>
            <p className="card-text">With the Cincinnati Bengals, Cincinnati Reds, FC Cincinnati, and the Cincinnati Cyclones - we have a sport for any and everyone!</p>
          </div>
        </div>
        <div className="card center mx-2" style={{ width: '18rem' }}>
          <div className="card-body food">
            <h5 className="card-title">Food</h5>
            <p className="card-text">If you want to try some unique regional foods, you've come to the right place. From Skyline Chili to Montgomery Inn, there's tastes of all type!</p>
          </div>
        </div>
        <div className="card center mx-2" style={{ width: '18rem' }}>
          <div className="card-body drinks">
            <h5 className="card-title">Drinks</h5>
            <p className="card-text">Cincinnati is home to a wide variety of different breweries. Some of these include Madtree, 50West, and Rhinegeist - which has won multiple awards nation-wide.</p>
          </div>
        </div>
      </div>
      <br />
      <div className='flex pb-5'>
        <div className="card center mx-2" style={{ width: '18rem' }}>
          <div className="card-body art">
            <h5 className="card-title">Art</h5>
            <p className="card-text">From the Cincinnati Art Museum to one of the many seasonal exhibits Cincinnati offers such as Blink, art in Cincinnati knows no boundaries.</p>
          </div>
        </div>
        <div className="card center mx-2" style={{ width: '18rem' }}>
          <div className="card-body history">
            <h5 className="card-title">History</h5>
            <p className="card-text">A city that's rich in history. Visit the Cincinnati Union Terminal or the National Underground Railroad Freedom Center to escape to the past.</p>
          </div>
        </div>
        <div className="card center mx-2" style={{ width: '18rem' }}>
          <div className="card-body music">
            <h5 className="card-title">Music</h5>
            <p className="card-text">There's concert venues everywhere in Cincinnati! Whether it's a Wednesday or Saturday night, you can find something to fit your needs.</p>
          </div>
        </div>
      </div>
      <br />
    </div>

  )
}




export default About;