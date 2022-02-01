const React = require('react')
const baker = require('../controllers/bakers_controller')
const Default = require('./layouts/Default')

function Index ({breads, bakers, title}) {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        <h3>Bakers</h3>
        <ul>
            {
                bakers.map((baker) => {
                    return (
                        <li key={baker._id}>
                            <a href={`/bakers/${baker._id}`}>{baker.name}</a>

                        </li>
                    )
                })
            }
        </ul>
        {/* <p>I have {breads[0].name} bread!</p> */}
        
        <h3>Breads</h3>
        <a className='btn btn-primary' href={`/breads/all_breads`}>All Breads</a>
        <ul>
            {
                breads.map((bread, index)=> {
                    return (<li key={index}>
                        <a href={`/breads/${bread._id}`}>
    {bread.name}
</a>
                        </li>
                    )
                })
            }
            
        </ul>
        <div className="newButton">
  <a href="/breads/new"><button>Add a new bread</button></a>
  <a href="breads/seed"><button>Seed Data</button></a>
  
</div>
      </Default>
    )
}

module.exports = Index