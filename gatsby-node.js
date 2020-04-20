// const path = require('path');

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
// const wrapper = promise =>
//     promise.then(result => {
//         if (result.errors) {
//             throw result.errors
//         }
//         return result
//     });

exports.createPages = async ({ actions }) => {
    const { createPage } = actions;
    const homePageTemplate = require.resolve('./src/templates/home.jsx');
    createPage({
        type: 'Homepage',
        match: '/',
        path: `/`,
        component: homePageTemplate,
    });
}
