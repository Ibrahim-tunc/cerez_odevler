import Koa from 'koa'
import koaBody from 'koa-body';
import books from './book.js'
import about from './about.js'

const app = new Koa();

// Our First Route
app.use(koaBody());


app.use(books.routes());
app.use(about.routes());

// Bootstrap the server
app.listen(3000);


