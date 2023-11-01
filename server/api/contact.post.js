import nodemailer from 'nodemailer';
import validator from 'validator';
const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
	host: config.MAILHOST,
	port: config.MAILPORT,
	auth: {
		user: config.MAILUSER,
		pass: config.MAILPASSWORD,
	},
});

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);

		await isValid(body)
			.then(async (data) => {
				const mail = await transporter.sendMail({
					form: `"${data.name}" <${data.email}>`,
					to: config.CONTACTMAIL,
					subject: data.comment,
					text: data.comment,
					html: data.message,
				});

				console.log('Message sent: %s', mail.messageId);
				console.log('Preview URL: %s', nodemailer.getTestMessageUrl(mail));
				return Promise.resolve();
			})
			.catch((errors) => {
				return Promise.reject(errors);
			});

		return 'Gesendet!';
	} catch (error) {
		sendError(event, createError({ statusCode: 400, statusMessage: error }));
	}
});

async function isValid(body) {
	const errors = [];

	if (validator.isEmpty(body.name || ''))
		errors.push({
			field: 'name',
			error: 'Field is required.',
		});
	if (validator.isEmpty(body.phone || ''))
		errors.push({ 
        field: 'phone', 
        error: 'Field is required.'
     });
	if (validator.isEmail(body.email || ''))
		errors.push({ 
        field: 'email',
        error: 'Field is required.' 
    });
	if (validator.isEmpty(body.budget || ''))
		errors.push({ 
        field: 'budget',
        error: 'Field is required.' 
    });
	if (!validator.isEmpty(body.comment || ''))
		errors.push({ 
        field: 'comment', 
        error: 'Field should be a valid .' 
    });

	if (errors.length > 0) {
		return Promise.reject(errors);
	} else {
		return Promise.resolve({
			email: validator.normalizeEmail(body.email),
			name: validator.escape(body.name),
            phone: validator.escape(body.phone),
			budget: validator.escape(body.budget),
			comment: validator.escape(body.comment),
		});
	}
}