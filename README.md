# @tinyhttp request.query error when having params and queries

While playing with @tinyhttp I ran into the following problem.

When I try to send a request with URL query to a route that also has params like `/cats/:catId/moods?food=fish`

My server hangs itself. 

This is a [small gist](req.query) to reproduce that error.

## How to reproduce

```bash
npm ci
npm run dev
```

In another session

```bash
curl --request GET \
  --url 'http://localhost:3000/cats/1/moods?foo=bar' 
```