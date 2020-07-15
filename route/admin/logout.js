module.exports = (res, req) => {
    // 删除session
    req.session.destroy(function () {
        // 删除cookie
        res.clearCookie('connect.sid');
        res.redirect('/admin/login')
        // 清楚模板中的用户信息
        req.app.locals.userInfo = null;
    })
}