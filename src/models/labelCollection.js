import Collection from 'ampersand-rest-collection';
import Label from './label';
import githubMixin from '../helpers/githubMixin'

export default Collection.extend(githubMixin, {
    url() {
        let parent = 'thehanseiway/Aplus';
        return 'https://api.github.com/repos/' + parent + '/labels';
    },
    model: Label,
    addToRepo() {
        console.log('collection ' + this );
    }
})
