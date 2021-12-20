import Router from "koa-router";

const router = new Router({
	prefix: '/about'
});


let about = 'about'




router.get('/', (ctx, next) => {
	ctx.body = about;
	next();
});

export default router