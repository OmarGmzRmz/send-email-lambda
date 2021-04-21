const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(''); // Add your SendGrid API key

exports.handler = async (event) => {
    const msg = {
        from: 'Omar Eliseo Gómez Ramírez <gomar8138@gmail.com>',
        to: ['gomar8138@gmail.com'],
        subject: 'Personal Website Email',
        html : `
            <html>
                <head></head>
                <body>
                    <p>Got email from personal website visitor.</p>
                    <p>${event.name}</p>
                    <p>${event.email}</p>
                    <p>${event.message}</p>
                </body>
            </html>
        `
    }; 
    try {
        await sgMail.send(msg);
        const response = {
            statusCode: 200,
            body: JSON.stringify('Email sent!')
        };
        return response;
    } catch (error) {
        console.log(error);
        const response = {
            statusCode: 500,
            body: JSON.stringify('Could not send email.')
        };
        return response;
    }
};
 