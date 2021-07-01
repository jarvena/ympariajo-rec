const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, req, res, next) => {
    console.log('Express error handling:')
    console.error(error.message)
    console.log(error.name)
    console.log('-------------')
    next(error)
}

module.exports = {
    unknownEndpoint,
    errorHandler
}