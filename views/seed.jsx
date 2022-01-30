const React = require('react')
const Default = require('./layouts/Default')

function Seed () {
    return(
        <Default>
            <form className='container row' action={`/breads/seed?_method=ADDMANY`} method="POST">
                <div className='col'>
                    <label htmlFor="newbreads">Add Bunch of Breads</label>
                    <textarea id="newbreads" type="text-area"></textarea>
                </div>
            </form>
        </Default>
    )
}

module.exports = Seed