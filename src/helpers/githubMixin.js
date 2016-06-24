import app from 'amperssand-app'

export default {
    ajaxConfig() {
        return {
            headers: {
                Authorization: 'token ' + app.me.token
            }
        }
    }
}
