import Model from 'ampersand-model';
import githubMixin from '../helpers/githubMixin'

export default Model.extend(githubMixin, {
    url() {
        return 'https://api.github.com/repos/' + this.full_name;
    },

    props: {
        'id': 'number',
        'name': 'string',
        'full_name': 'string'
    },

    derived: {
        appUrl: {
            deps: ['full_name'],
            fn() {
                return '/repo/' + this.full_name;
            }
        }
    }
})
