exports.logout = (req, res) => {
    res.clearCookie('auth')
    console.log("logout");
    res.send("logout")
}