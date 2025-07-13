import { FastifyInstance } from 'fastify'
import { register } from './controllers/register'
import { authenticate } from './controllers/authenticate'
import { profile } from './controllers/profile'
import { verifyJwt } from './middlewares/verify-jws'
import { createPost } from './controllers/create-posts'
import { fetchRecentPosts } from './controllers/fetch-recent-posts'
import { fetchUserPosts } from './controllers/fetch-user-posts'
import { editPost } from './controllers/edit-posts'
import { deletePost } from './controllers/delete-posts'
import { editProfile } from './controllers/edit-photo'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  app.get('/me', { onRequest: [verifyJwt] }, profile)
  app.put('/me', { onRequest: [verifyJwt] }, editProfile)
  app.post('/posts', { onRequest: [verifyJwt] }, createPost)
  app.get('/posts/feed', { onRequest: [verifyJwt] }, fetchRecentPosts)
  app.get('/my-posts', { onRequest: [verifyJwt] }, fetchUserPosts)
  app.put('/posts/:postId', { onRequest: [verifyJwt] }, editPost)
  app.delete('/posts/:postId', { onRequest: [verifyJwt] }, deletePost)
}
