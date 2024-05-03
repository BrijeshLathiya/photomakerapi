// let userData =''
const userModel = require('../model/userDataModel')
const path = require('path');
const mongoose = require('mongoose')
const db = mongoose.connection
const upload = require('../model/fileUpload'); 
const Canvas = require('canvas');

// exports.postUserData = upload.single('Avtar'), async (req, res) => {
//     console.log("hi")
//     // Save the form data to MongoDB
//     try {
//         const { MobileNo, UserName} = req.body;
//         console.log(MobileNo, UserName,"hello");
        
//         // Create a new user data instance
//         const userData = new userModel({
//             MobileNo,
//             UserName,
//         });

//         // console.log(req.file.buffer,"req.file.buffer");

            // async function addPhotoToImage() {
            // const canvas = new Canvas(1500, 1500);
            // const ctx = canvas.getContext('2d');

            // const photo = await Canvas.loadImage('katha.jpg');
            // ctx.drawImage(photo, 0, 0);

            // const buffer = canvas.toBuffer(Avtar);
            //     fs.writeFileSync('new-image.png', buffer);
            // }

            // addPhotoToImage();


//         // Save the user data to MongoDB
//         await userData.save();

//         return res.status(200).json({ status: true, message: 'User created successfully', userData });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ status: false, message: 'Internal server error' });
//     }
// };

exports.postUserData = async (req, res) => {
    console.log("hey dude")
    // Save the form data to MongoDB
    try {
        const userData = await new userModel();
        userData.MobileNo = req.body.MobileNo
        userData.UserName = req.body.UserName
        // userData.Avtar = req.Avtar

        console.log(userData,"userData")

        await userData.save()

        return res.status(200).json({status: true, message: "User created Successfully", userData});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, message: "Internal server error" });
    }
}
