import { Hono } from "hono";

export const runtime = "edge";

const app = new Hono().basePath('/api');

app.get('/blog/:slug/comments', async (c) => {
  const { slug } = c.req.param();
  const { results } = await c.env.DB.prepare(
    'SELECT yourName, yourEmail, comment, createdDate, createdTime FROM comments WHERE postId = ?'
  )
    .bind(slug)
    .all();

  return c.json(results);
})

app.post('/blog/:slug/comments', async (c) => {
  const { slug } = c.req.param();
  const { yourName, yourEmail, comment } = await c.req.json();
  const { lastInsertRowid } = await c.env.DB.prepare(
    'INSERT INTO comments (postId, yourName, yourEmail, comment, createdDate, createdTime) VALUES (?, ?, ?, ?, ?, ?)'
  )
    .bind(slug, yourName, yourEmail, comment, new Date().toISOString().split('T')[0], new Date().toISOString().split('T')[1].split('.')[0])
    .run();

  return c.json({ id: lastInsertRowid });
})

export default app;
