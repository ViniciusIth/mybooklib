export function handle({ event, resolve }) {
	const jwt = event.cookies.get('jwt');
	event.locals.loginData = jwt ? JSON.parse(Buffer.from(jwt, 'base64').toString('utf8')) : null;

	return resolve(event);
}
