import fastify from 'fastify'

const app = fastify()

app.get('/hello', async () => {
    return {hello: 'world'}
})

app.listen({
    port: 3333
}).then(() => {
    console.log('Server is running on port 3333')
})