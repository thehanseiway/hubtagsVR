import Model from 'ampersand-model';
import githubMixin from '../helpers/githubMixin';

export default Model.extend(githubMixin, {
    props: {
        'url': 'string',
        'name': 'string',
        'color': 'string',
    }
})
