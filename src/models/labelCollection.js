import Collection from 'ampersand-rest-collection';
import Label from './label';
import xhr from 'xhr';
import githubMixin from '../helpers/githubMixin'

export default Collection.extend(githubMixin, {
    url() {
        return this.parent.url() + '/labels';
    },
    model: Label,
    addNewLabel(attributes) {
        xhr({
            url: this.url(),
            method: 'POST',
            json: attributes,
            headers: {
                Authorization: 'token ' + app.me.token,
            },
        }, function (err, res, body) {
            console.log(res);
        });
    }
})
