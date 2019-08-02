// Dependencies
const User = require("../models/User");
const Contact = require("../models/Contact");

exports.getContacts = async function (req, res) {
    let userRequester = await User.findById(req.user.id, (error, userReq) => {
        if (error) {
            return console.log(`Error has occurred: ${error}`);
        }
        return userReq;
    });
    Contact.find({requester: userRequester}, {recipient: true, status: true})
        .populate('recipient', 'username profile.image')
        .then(contacts => {
            console.log(contacts);
            return res.json(contacts);
        }, () => {
            return res.json({msg: "Could not get contacts"});
        });
};

exports.createRequest = async function (req, res) {
    //Get requester and recipient
    let Requester = await User.findById(req.user.id, (error, userReq) => {
        if (error) {
            return console.log(`Error has occurred: ${error}`);
        }
        return userReq;
    });

    let Recipient = await User.findOne({email: req.body.email}, (error, userRec) => {
        if (error) {
            return console.log(`Error has occurred: ${error}`);
        }
        return userRec;
    });

    if (!Recipient) {
        return res.status(404).json({ msg: "E-mail address not found" });
    }

    //Make contacts
    const docRequester = await Contact.findOneAndUpdate(
        {requester: Requester, recipient: Recipient},
        {$set: {status: 1}},
        {upsert: true, new: true}
    );
    const docRecipient = await Contact.findOneAndUpdate(
        {recipient: Requester, requester: Recipient},
        {$set: {status: 2}},
        {upsert: true, new: true}
    );

    await User.findOneAndUpdate(
        {_id: Requester.id},
        {$push: {contacts: docRequester._id}}
    );
    await User.findOneAndUpdate(
        {_id: Recipient.id},
        {$push: {contacts: docRecipient._id}}
    );
    return res.status(200).json({msg: "Request sent"});
};

exports.acceptRequest = async function (req, res) {
    //Get requester and recipient
    let Requester = await User.findById(req.user.id, (error, userReq) => {
        if (error) {
            return console.log(`Error has occurred: ${error}`);
        }
        return userReq;
    });
    let Recipient = await User.findOne({username: req.body.username}, (error, userRec) => {
        if (error) {
            return console.log(`Error has occurred: ${error}`);
        }
        return userRec;
    });

    await Contact.findOneAndUpdate(
        {requester: Requester, recipient: Recipient},
        {$set: {status: 3}}
    );
    await Contact.findOneAndUpdate(
        {recipient: Requester, requester: Recipient},
        {$set: {status: 3}}
    );
    return res.status(200).json({msg: "Friend request accepted"});
};

exports.rejectRequest = async function (req, res) {
    //Get requester and recipient
    let Requester = await User.findById(req.user.id, (error, userReq) => {
        if (error) {
            return console.log(`Error has occurred: ${error}`);
        }
        return userReq;
    });
    let Recipient = await User.findOne({username: req.body.username}, (error, userRec) => {
        if (error) {
            return console.log(`Error has occurred: ${error}`);
        }
        return userRec;
    });

    const docA = await Contact.findOneAndRemove(
        {requester: Requester, recipient: Recipient}
    );
    const docB = await Contact.findOneAndRemove(
        {recipient: Requester, requester: Recipient}
    );
    await User.findOneAndUpdate(
        {_id: Requester.id},
        {$pull: {contacts: docA._id}}
    );
    await User.findOneAndUpdate(
        {_id: Recipient.id},
        {$pull: {contacts: docB._id}}
    );
    return res.status(200).json({msg: "Friend request declined"});
};
