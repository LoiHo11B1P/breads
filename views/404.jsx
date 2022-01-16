const React = require('react');
const Default = require('./layouts/default')

function show404() {
    return(
        <Default>
            <h2> 404 Budddy </h2>
        </Default>
    )
}

module.exports = show404;