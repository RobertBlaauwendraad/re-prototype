import Home from "@/components/views/Home";
import {createRouter, createWebHistory} from 'vue-router'
import AskForHelp from "@/components/views/AskForHelp";
import VolunteerBooking from "@/components/views/VolunteerBooking";
import Contacts from "@/components/views/Contacts";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home - Prototype',
      metaTags: [
        {
          name: 'description',
          content: 'The homepage of our prototype.'
        },
        {
          property: 'og:description',
          content: 'The homepage of our prototype.'
        }
      ]
    }
  },
  {
    path: '/ask-for-help',
    name: 'ask-for-help',
    component: AskForHelp,
    meta: {
      title: 'Ask for help - Prototype',
      metaTags: [
        {
          name: 'description',
          content: 'The ask for help page of our prototype.'
        },
        {
          property: 'og:description',
          content: 'The ask for help page of our prototype.'
        }
      ]
    }
  },
  {
    path: '/available-volunteers',
    name: 'available-volunteers',
    component: VolunteerBooking,
    meta: {
      title: 'Available Volunteers - Prototype',
      metaTags: [
        {
          name: 'description',
          content: 'The available volunteers page of our prototype.'
        },
        {
          property: 'og:description',
          content: 'The available volunteers page of our prototype.'
        }
      ]
    }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
    meta: {
      title: 'Contacts - Prototype',
      metaTags: [
        {
          name: 'description',
          content: 'The contacts page of our prototype.'
        },
        {
          property: 'og:description',
          content: 'The contacts page of our prototype.'
        }
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router