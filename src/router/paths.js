/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
    {
      path: '/login',
      name: 'Login',
      view: 'Login'
    },
    {
      path: '/home',
      name: 'Home',
      view: 'Main'
    },
    {
      path: '/employeer',
      name: 'Employeer',
      view: 'Employeer'
    },
    {
      path: '/job-post',
      name: 'Jobs',
      view: 'employeer/Jobs'
    },
    {
      path: '/program-post',
      name: 'Programs',
      view: 'employeer/Programs'
    },
    {
      path: '/training-post',
      name: 'Training',
      view: 'employeer/Trainings'
    },
    {
      path: '/post/:id',
      name: 'Post',
      view: 'Post'
    },
    {
      path: '/inventory',
      name: 'Inventory',
      view: 'Inventory'
    },
    {
      path: '/accounts',
      name: 'Account Management',
      view: 'AccountPage'
    },
    {
      path: '/register',
      name: 'Register',
      view: 'account/Registration'
    },
    {
      path: '/verify',
      name: 'VerifyAccount',
      view: 'account/Verify'
    },
    {
      path: '/profile',
      name: 'Profile',
      view: 'account/Profile'
    },
    {
      path: '/student',
      name: 'Student',
      view: 'Student'
      //supposedly student.vue ,, for now same as applicant muna
    },
    {
      path: '/studentprofile',
      name: 'StudentProfile',
      view: 'account/StudentProfile'
    }
    
  ]
  