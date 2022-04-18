export default function (req, res) {
    return new Promise((resolve, reject) => {
        let nodemailer = require('nodemailer')
        const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'caromagnanihg@gmail.com',
            pass: process.env.EMAIL_PW,
        },
        secure: true,
        })

        const mailData = {
        from: 'fedegarcia37@gmail.com',
        to: 'federicogarcialivisky@gmail.com',
        subject: 'NUEVA COMPRA REALIZADA',
        text: "NUEVA COMPRA | Sent from: " + req.body.email,
        html: `
        <p>NUEVA COMPRA | Sent from: " + ${req.body.email}</p>
        <p>Nombre:${req.body.name} ${req.body.surname}</p>
        <p>Numero de tel: ${req.body.phone.area_code} ${req.body.phone.number}</p>
        <p>Localidad: ${req.body.localidad}</p>
        <p>Direccion: ${req.body.address.street_name} ${req.body.address.street_number}</p>
        <p>Codigo Postal: ${req.body.address.zip_code}</p>`
        }

        transporter.sendMail(mailData, function (err, info) {
        if(err)
            console.log(err)
        })
        res.status(200)

    });

}