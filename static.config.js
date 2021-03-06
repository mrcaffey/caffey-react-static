import axios from 'axios'

export default {
  getSiteData: () => ({
    siteRoot: 'https://www.caffey-inc.com', basePath: 'static/react-static',
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/work',
        component: 'src/containers/Work',
      },
      {
        path: '/contact',
        component: 'src/containers/Contact',
      },
      {
        path: '/testimonials',
        component: 'src/containers/Testimonials',
      },
    ]
  },
}
