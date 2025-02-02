const Hostels = require('./../../models/gymkhana/hostelsModel');

exports.getAll = async (req, res) => {
    try {
        const allHostels =await Hostels.find();
        const context = {
            title:"hostel",
            status: 'success',
            data:
                allHostels,
            
        };
        res.render("gymkhana/hostels/hostels.ejs", context);
    } catch (err) {
        res.status(400).json({ Error: err });
    }
};
exports.form=async(req,res,next)=>{
    try{
        const allHostels =await Hostels.find();
        const context = {
            title:"hostel",
            status: 'success',
            data:
                allHostels,
            
        };
        res.render("gymkhana/hostels/hostelsadd.ejs",context);
    }
    catch(error){
        console.log(error)
    }
};
exports.addhostels=async(req,res)=>{
    try {
        const context = {
            title:"hostel",
            status: 'success'
        };
        Hostels.create({
            hostel_name:req.body.hostelname,
            secretaries: [
                {
                    name: req.body.secname,
                    post:req.body.post,
                    email:req.body.secemail,
                    warden:req.body.wardenname,
                    warden_email:req.body.wardenemail,
                },
            ],
        });
        console.log("DATA SAVED");
        res.render("gymkhana/hostels/hostels.ejs", context);
    } catch (err) {
        console.log(err);
    }
}
