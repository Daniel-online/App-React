import Fastify from 'fastify'

async function bootstrap(){
  const fastify = Fastify({
    logger: true,
  })

  // http://localhost:3333/tabelaTime
fastify.get('/localhost:3333/tabelaTime', () =>
{
  return {count : 100}
})

  await fastify.listen({port: 3333})
}

bootstrap()