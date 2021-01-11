const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const postmarkTransport = require('nodemailer-postmark-transport')
const admin = require('firebase-admin')
const striptags = require('striptags')

admin.initializeApp()

const postmarkKey = functions.config().postmark.key
const mailTransport = nodemailer.createTransport(postmarkTransport({
    auth: {
        apiKey: postmarkKey
    }
}))

exports.forwardMessage = functions.firestore.document('/message/{messageId}').onCreate((snapshot, context) => {
    let html = "<strong>Name:</strong> " + striptags(snapshot.get('name')) + "<br/><br/>";
    html += "<strong>Email:</strong> " + striptags(snapshot.get('email')) + "<br/><br/>";
    if (snapshot.get('message')) {
        html += "<strong>Message:</strong><br/><pre>" + striptags(snapshot.get('message')) + "</pre><br/><br/>"
    }

    return sendEmail(html);

})

function sendEmail(html) {

    const mailOptions = {
        from: '"No Reply" <oneleggedlevi@kw.com>',
        to: 'oneleggedlevi@kw.com',
        subject: 'Contact Request Sent Through Website',
        html: html
    }

    return mailTransport.sendMail(mailOptions)
        .then(() => console.log('dbMessagesOnUpdate:Welcome confirmation email'))
        .catch((error) => console.error('There was an error while sending the email:', error))
}











// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
