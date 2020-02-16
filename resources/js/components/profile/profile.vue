<template>
	<div>
		<page-title :heading=heading :subheading=subheading :icon=icon></page-title>

		<div>
		  <b-card title="Admin" sub-title="Semua Admin yang terdaftar">
		    
		  </b-card>
		</div>
	</div>
</template>

<script>
	import PageTitle from "./../architect/PageTitle2.vue";
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'

  import {library} from '@fortawesome/fontawesome-svg-core'
  import {
    faTrashAlt,
    faCheck,
    faCalendarAlt,
    faAngleDown,
    faAngleUp,
    faTh,
  } from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  library.add(
    faTrashAlt,
    faCheck,
    faAngleDown,
    faAngleUp,
    faTh,
    faCalendarAlt,
  );

  export default {
    components: {
      PageTitle,
      VuePerfectScrollbar,
      'font-awesome-icon': FontAwesomeIcon,

    },
    data: () => ({
      heading: 'Profile',
      subheading: 'Halaman detail dari akun anda',
      icon: 'pe-7s-user icon-gradient bg-tempting-azure',
    }),

    methods: {},

  };
</script>