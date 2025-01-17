// config.js
module.exports = {
    github: {
        username: 'bsthen', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: true, // Forked projects will not be displayed if set to true.
            projects: ['laravel-ecommerce'] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'bansothen',
        twitter: 'bansothen',
        facebook: 'bansothen',
        dribbble: '',
        behance: '',
        medium: 'bansothen',
        devto: 'bansothen',
        website: 'https://about.me/bansothen/',
        phone: '',
        email: 'bansokthen@gmail.com'
    },
    skills: [
        'Web Server',
        'CentOS',
        'JavaScript',
        'React.js',
        'Node.js',
        'Python',
        'Git',
        'Docker',
        'CSS',
        'Ubuntu',
        'Tailwind',
        'Bootstrap',
    ],
    experiences: [
        { 
            company: 'Life Toolbox Co., Ltd.',
            position: 'Cloud Engineer & DevOps',
            from: 'Nov 2021',
            to: 'Present'
        },
        { 
            company: 'KHB Media Plc',
            position: 'Web Developer',
            from: 'Jan 2019',
            to: 'Oct 2021'
        },
        { 
            company: 'Alphabase - I.T Solutions and Consulting Services',
            position: 'Web Developer',
            from: 'Nov 2018',
            to: ' Oct 2018'
        }
    ],
    education: [
        { 
            institution: 'Royal University Of Phnom Penh (RUPP)',
            degree: 'Bachelor of Computer Science',
            from: '2016',
            to: '2020'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'bansothen',
        limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id or keep it empty
    },
    hotjar: {
        id: '', //  Please remove this and use your own id or keep it empty
        snippetVersion : 6
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
