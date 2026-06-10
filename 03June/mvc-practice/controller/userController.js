const getUsers = (req, res) => {
    // res.status(200).json({
    //     message: "Users Fetched Successfully"
    // })

    throw new Error("NOT GOT USES");

}

const createUser = (req, res) => {


    res.status(201).json({
        message: "User Created Successfully",
        id:1,
        name:"kapil",
    })
}

const updateUser = (req, res) => {
    res.status(200).json({
        message:"User updated successfully",
        id:2,
        name:"Kapil Dahiya"
    })
}

const deleteUser = (req, res) => {
    res.status(200).json({
        message:"User Deleted Successfully",
    })
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}